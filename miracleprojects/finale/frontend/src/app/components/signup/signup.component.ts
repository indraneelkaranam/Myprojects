import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {ValidateService} from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  firstname: String;
  lastname: String;
  phonenumber :string;
  email: String;
  password: String;
  adharno:String;
  state:String;
  area:String;

  constructor(
    private validateservice:ValidateService,
    private flashMessage: FlashMessagesService,
    private authService:AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  onRegisterSubmit() {
    const user = {
      fisrtname: this.firstname,
      lastname: this.lastname,
      phonenumber: this.phonenumber,
      email: this.email,
      password: this.password,
      adharno: this.adharno,
      state: this.state,
      area: this.area,

    };
    // Required Fields
    if(!this.validateservice.validatesignup(user)) {
      // this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      alert("Please fill in all fields")
      return false;
    }

    // Validate Email
    if(!this.validateservice.validateEmail(user.email)) {
      alert("Done"+user)
    //this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    // Register user
    this.authService.signupUser(user).subscribe(data => {
      console.log("this is a check"+data.firstname);
    if(data.success) {
      alert("data stored in database");
      //this.flashMessage.show('You are now registered and can now login', {cssClass: 'alert-success', timeout: 3000});
      this.router.navigate(['/login']);
    } else {
      alert("data not stored");
      //this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
      this.router.navigate(['/signup']);
    }
  });
  }
}