var express=require('express');
var app=express();
var bodyParser = require('body-parser');
var multer = require('multer');
var MongoClient = require('mongodb').MongoClient;
var port= 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


//Enabling CORS
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
});

app.get('/', function(req, res) {
res.sendFile(__dirname + '/index.html');
});

MongoClient.connect("mongodb://localhost:27017/deek", function(err, db) {
if(err) {
return console.dir(err);
}

else{	
var collection=db.collection('signup');
// app.post('/signup',function(req,res)
// {
// 	console.log(req.body)
// 	var firstname = req.body.firstname;
// 	var lastname = req.body.lastname;
// 	var phonenumber = req.body.phonenumber;
// 	var email = req.body.email;
// 	var password = req.body.password;
//   //  var image = req.file.filename;
// console.log(firstname,'',lastname,'',phonenumber,email,password);


// collection.insert({'firstname':firstname,'lastname':lastname,'phonenumber':phonenumber,'email':email,'password':password/*,'productimg':image*/},function(err,data){
// if(err){
// 	error={
// 		"output":err
// 		}
// res.json(error);
// console.log(error)
// 	}
// else
// {
// 	var responsedata={

// 		firstname : data.output.ops[0].firstname,
// 		lastname : data.output.ops[0].lastname,
// 		phonenumber : data.output.ops[0].phonenumber,
// 		email : data.output.ops[0].email,
// 		password : data.output.ops[0].password

// 	}
// 	// response={"ouput":data}
// 	res.json(responsedata);
// 	console.log(response)
// }
// })
// })

// app.post('/image',function(req,res){
	
// var brand=req.body.brand;
// collection.find({"brand":brand}).toArray(function(err,data){
// if(err){ error={"output":err}
// res.json(error);
// console.log(error)
// }
// else
// {
// 	response={"output":data}
// 	res.json(response);
// 	console.log(response)
// }	
// })
// })


app.post('/signup',(req,res)=> {
	console.log(req.body);
})
}
})
app.listen(port);
console.log("server is running at "+port);