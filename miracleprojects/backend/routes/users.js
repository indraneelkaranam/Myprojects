 const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Allusers = require('../models/allusers');

// Register
router.post('/signup', (req, res, next) => {
  res.setHeader('Content-Type', 'text/html');
  let newUser = new User ({
    //_id:req.body.username,
    fisrtname: req.body.fisrtname,
    lastname: req.body.lastname,
    phonenumber: req.body. phonenumber,
    email: req.body.email,
    password: req.body.password
  });
  let newAllUser = new Allusers ({
    //_id:req.body.username,
    fisrtname: req.body.fisrtname,
    lastname: req.body.lastname,
    phonenumber: req.body. phonenumber,
    email: req.body.email,
    password: req.body.password
  });

  User.addUser(newUser, (err, user) => {
    if(err) {
      console.log({success: false, msg: 'Failed to register user'});
      res.json({success: false, msg: 'Failed to register user'});
      //res.json({success: false, msg: 'Failed to register user'});
    } else {
        //Add to Dummy Collection
        Allusers.addUser(newAllUser, (err, user) => {
          console.log({success: true, msg: 'Registered in User Collection'});
          if(err) {
            console.log({success: false, msg: 'Failed to register Alluser'});
          } else {
            console.log({success: true, msg: 'registered in User and Alluser Collection'});
            res.json({success: true, msg: 'registered in User and Alluser Collection'});
          }
        });
    }
  });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.getUserByemail(email, (err, user) => {
    if(err) throw err;
    if(!user) {
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch) {
        const token = jwt.sign({data: user}, config.secret, {
          expiresIn: 604800 // 1 week
        });
        res.json({
          success: true,
          token: 'JWT '+token,
          user: 
          {
            id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email
          }
        })
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});
// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});

module.exports = router;
