import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor() { }

  authenticate(username2: string, password2: string): boolean {
    if (username2 === 'Aadu' && password2 === 'admin123') {
      sessionStorage.setItem( 'username2' , username2); 
      return true;
    }
    return false;
  }

  isUserLoggedIn()
  {
    console.log("user log in ho gaya!!");
    let user = sessionStorage.getItem('username2');
    return !(user === null);
  }

  logout(): void {
console.log("logging out ho gaya!!");
    sessionStorage.removeItem('username2');
  }
}
