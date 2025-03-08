import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../service/user.service';
import { MechanicAppointment } from '../model/mechanic-appointment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointmnet-details',
  imports: [RouterLink, CommonModule],
  templateUrl: './appointmnet-details.component.html',
  styleUrl: './appointmnet-details.component.css'
})
export class AppointmnetDetailsComponent implements OnInit{

  mechanicAppointment:MechanicAppointment[]=[];

  constructor(private userService:UserService){}

  ngOnInit(): void {
    this.userService.getAppointment().subscribe(data=>{
      this.mechanicAppointment = data;
    })
  }

}
