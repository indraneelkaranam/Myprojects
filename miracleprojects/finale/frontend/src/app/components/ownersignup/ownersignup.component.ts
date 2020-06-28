import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-ownersignup',
  templateUrl: './ownersignup.component.html',
  styleUrls: ['./ownersignup.component.css']
})
export class OwnersignupComponent implements OnInit {
  firstname: String;
      lastname: String;
      phonenumber: String;
      email: String;
      password: String;
      state: String;
      area: String;

files:any;
  constructor(public http:Http) { }
  selectFile($event) {
    this.files = $event.target.files || $event.srcElement.files;
    
  }
  onRegisterSubmit()
  {
    const formData: any = new FormData();

    const user={
      firstname: this.firstname,
      lastname: this.lastname,
      phonenumber: this.phonenumber,
      email: this.email,
      password: this.password,
      state: this.state,
      area: this.area,
    }

   
    formData.append("dikshitha", this.files[0], this.files[0]['name']);
     let url = 'http://localhost:3000/create'

    this.http.post(url,formData).subscribe(res => {
      console.log(res)
    });

  }


  ngOnInit() {
  }

}
