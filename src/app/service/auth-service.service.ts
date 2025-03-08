import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private router:Router) { }

  loginSucess(): void{
    localStorage.setItem('auth','true');
    this.router.navigate(['/home'], { replaceUrl:true });
  }

  logOut(): void{
    localStorage.removeItem('auth');
    this.router.navigate(["/login"]),{replaceUrl :true};
  }

  isLoggedIn(): boolean{
    return localStorage.getItem('auth') === 'true';
  }
}
