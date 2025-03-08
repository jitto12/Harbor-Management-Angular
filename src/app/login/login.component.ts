import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthServiceService } from '../service/auth-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone:true,
  imports:[FormsModule, RouterLink, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  user:User={username:'', password:''};
  message: string=''; 

  constructor(private userService:UserService, private router: Router, private authService:AuthServiceService){ }

  login() {
    this.userService.userLogin(this.user).subscribe({
      next: (response: any) => {
        if(response.message === 'Login Successfull.'){
          console.log('Login Successfully',response);
          this.authService.loginSucess();
          this.router.navigate(['/home']);
          this.message='Login Successfully';
        }else if(response.message === 'User not found!'){
          console.log('User Not Found',response);
          this.message = '⚠User Not Found!!!.';
        }else if(response.message == 'Invalid Credentials!!!'){
          console.log('Invalid Credentials',response);
          this.message = '⚠Invalid Credentials!!!';
        }
      },
      error : err =>{
        console.error('Error:',err);
        this.message = 'Please Try Again Later.';
      }
    });    
  } 

  ngOnInit() {
    window.history.pushState(null, '', window.location.href);
    window.onpopstate = () => {
      window.history.pushState(null, '', window.location.href);
    };
    if (performance.navigation.type === 2) {
      location.reload();
    }
  }
}
