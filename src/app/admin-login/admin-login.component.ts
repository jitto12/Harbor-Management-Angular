import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../service/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminLogin } from '../model/admin-login';

@Component({
  selector: 'app-admin-login',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {

  adminLogin:AdminLogin={userName:'',password:''}
  message:string='';

  constructor(private userService:UserService, private router:Router) { }

  admin(){
    this.userService.adminLogin(this.adminLogin).subscribe({
      next: (response) => {
        if(response.message==='Username Not Found'){
          console.log('User not Found',response);
          this.message='User Not Found!';
        }else if(response.message==='Verified'){
          this.router.navigate(["/adminhome"]);
          console.log('Admin Verified',response);
        }else if(response.message==='Not Verified'){
          console.log('InCorrect Credentials',response);
          this.message='Incorerct Credentials!';
        }
      },
      error:(err)=>{
        console.log('error',err);
        this.message='Server Does not Respond!';
      }
    });
  }

}
