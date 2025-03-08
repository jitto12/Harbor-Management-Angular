import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { MechanicAppointment } from '../model/mechanic-appointment';
import { AdminLogin } from '../model/admin-login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loginURL:string='http://localhost:8080/login'
  private registerURL:string='http://localhost:8080/register'
  private addAppointmentURL:string='http://localhost:8080/addAppointment'
  private adminLoginURL:string='http://localhost:8080/adminlogin';
  private getAppointmentURL:string='http://localhost:8080/getappointments';

  constructor(private http: HttpClient) { }

  userLogin(user:User):Observable<any>{
    return this.http.post<any>(this.loginURL,user);
  }

  userRegister(user:User):Observable<any>{
    return this.http.post<any>(this.registerURL,user);
  }

  addAppointment(mechanicAppointment:MechanicAppointment):Observable<any>{
    return this.http.post<any>(this.addAppointmentURL,mechanicAppointment)
  }

  adminLogin(adminLogin:AdminLogin):Observable<any>{
    return this.http.post<any>(this.adminLoginURL,adminLogin)
  }

  getAppointment():Observable<MechanicAppointment[]>{
    return this.http.get<MechanicAppointment[]>(this.getAppointmentURL);
  }
}
