import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../model/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone:true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  user:User={username:'', password:'', phoneNumber:0};
  message:string='';

  constructor (private userService:UserService, private router: Router){ }

  register(){

    this.userService.userRegister(this.user).subscribe({
      next: (response :any) =>{
        if(response.message === 'User Registered Successfully.'){
          console.log('User Registered Successfully',response);
          this.message = 'User Registered Successfully.';
          this.router.navigate(['/login']);
        }else if(response.message === 'User Already Exist!!!'){
          console.log('User Already Exist',response);
          this.message = '⚠ Username or Phone number Already Exist!!!,Please Click Login Above.';
        }else if(response.message === 'Please Enter all the Details!!!'){
          console.log('Please Enter all the given Feilds!!!')
          this.message = '⚠ '+response.message;
        }else if(response.message==='Password Should be atleast 8 charcters!!!'){
          console.log('Password Should be atleast 8 charcters!!!',response);
          this.message='⚠ '+response.message;
        }
      },
      error: (err) =>{
        console.error('Error',err);
        this.message = 'Please Try Again Later';
      }
    });
  }  
}
