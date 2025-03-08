import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { MechanicComponent } from './mechanic/mechanic.component';
import { IceComponent } from './ice/ice.component';
import { FuelComponent } from './fuel/fuel.component';
import { GroceryComponent } from './grocery/grocery.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AppointmnetDetailsComponent } from './appointmnet-details/appointmnet-details.component';

export const routes: Routes = [
    {path: '', redirectTo:'/login', pathMatch:'full'},
    {path: 'login', component:LoginComponent},
    {path: 'register', component:RegisterComponent},
    {path: 'mechanic', component:MechanicComponent},
    {path: 'ice', component:IceComponent},
    {path: 'fuel',component:FuelComponent},
    {path: 'grocery',component:GroceryComponent},
    {path: 'home', component:HomeComponent},
    {path: 'contact', component:ContactComponent},
    {path: 'admin',component:AdminLoginComponent},
    {path: 'adminhome',component:AdminHomeComponent},
    {path: 'mechanicappointment', component:AppointmnetDetailsComponent},
    {path: 'about', component:AboutComponent}
];