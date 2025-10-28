import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-doctlogin',
  standalone: false,
  templateUrl: './doctlogin.html',
  styleUrl: './doctlogin.css',
})
export class Doctlogin {
logout() {
throw new Error('Method not implemented.');
}
  username: string = '';
  password: string = '';

  constructor(private router:Router,private docauth:DocauthService) { }

  invalidLogin = false;
errorMessage: any;

  checkLogin() {

    if (this.docauth.authenticate(this.username, this.password)) {
      this.router.navigate(['docdash']);
      this.invalidLogin = false;
      return true;
    } 
    else 
      {
      this.invalidLogin = true;
      alert('Invalid Credentials');
      this.router.navigate(['home']);
      return false;

    
  }
}
}
