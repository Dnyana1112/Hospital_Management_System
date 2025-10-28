import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {
    constructor() { }   

    authenticate(username: string, password: string) {


        if (username == 'Dnyana' && password == 'doctor123') {
            sessionStorage.setItem('username', username);
            return true;
          } else {
            return false;
          }
    }
    isUserLoggedIn(){

        console.log("Doctor log in ho gayi!!");
       let user= sessionStorage.getItem('username');
       console.log(user)
       return !(user===null);
    }
    logout(){
        console.log("Doctor logging out ho gayi!!");
        sessionStorage.removeItem('username');
    }
}