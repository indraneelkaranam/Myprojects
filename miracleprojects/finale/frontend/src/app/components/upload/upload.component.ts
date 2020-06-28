import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {ValidateService} from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
    file : string;
  constructor(
    private validateservice:ValidateService,
    private flashMessage: FlashMessagesService,
    private authService:AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  onuploadsubmit() {
    const user = {
      file: this.file,
    };
  

    // Register user
    this.authService.Uploaduser(user).subscribe(data => {
      console.log("this is a image check");
    if(data.success) {
      alert("image stored in database");
      //this.flashMessage.show('You are now registered and can now login', {cssClass: 'alert-success', timeout: 3000});
      this.router.navigate(['/login']);
    } else {
      alert("image not stored");
      //this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
      this.router.navigate(['/signup']);
    }
  });


  }
}
