import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../service/user.service';
import { MechanicAppointment } from '../model/mechanic-appointment';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mechanic',
  standalone:true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './mechanic.component.html',
  styleUrl: './mechanic.component.css'
})
export class MechanicComponent {

  mechanicAppointment:MechanicAppointment={name:'',phoneNumber:0,boatName:'',boatType:'',boatNumber:'',serviceType:'',prefferedDate:'',prefferedTime:''};
  message:string='';
  message1:string='';

  constructor(private userService:UserService){}

  addMechanicAppointment(){
    this.userService.addAppointment(this.mechanicAppointment).subscribe({
      next: (response: any) => {
        if(response.message === 'Appointment Added'){
          console.log('Appointment Added.', response);
          this.message = 'Appointment Added, Our Mechanic Will Contact You Soon.';
        }else if(response.message === 'The Boat you Entered is Already Appointmented,If you Want to Update the Appointment Form, go to DashBoard'){
          this.message1 = response.message;
        }
      },
      error :(err:any) => {
        console.log('Error:',err);
        this.message = 'Please Try again Later.';
      }
    })
  }
}
