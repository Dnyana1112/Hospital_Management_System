import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  AdminDashComponent } from './admindash/admindash';
import { AppointmentComponent } from './appointment/appointment';
import { CreateAppointment } from './create-appointment/create-appointment';
import { Home } from './home/home';
import { Docdash } from './docdash/docdash';
import { CreatePatient } from './create-patient/create-patient';
import { Medicinelist } from './medicinelist/medicinelist';
import { CreateMedicine } from './create-medicine/create-medicine';
import { UpdatePatient } from './update-patient/update-patient';
import { ViewPatient } from './view-patient/view-patient';
import { UpdateMedicine } from './update-medicine/update-medicine';
import { Doctlogin } from './doctlogin/doctlogin';
import { Adlogin } from './adlogin/adlogin';
import { AdminauthguardService } from './adminauthguard.service';
import { DoctorauthguardService } from './doctorauthguard.service';


const routes: Routes = [
  { path: 'admindash', component: AdminDashComponent ,canActivate:[AdminauthguardService]},       
  { path: 'appointmentlist', component: AppointmentComponent, canActivate:[AdminauthguardService]},
  {path: 'create-appointment', component: CreateAppointment, canActivate:[AdminauthguardService]},
  {path:'home',component:Home} ,
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'docdash',component:Docdash, canActivate:[DoctorauthguardService]},
  {path:'create-patient',component:CreatePatient},
  {path:'medicinelist',component:Medicinelist,canActivate:[DoctorauthguardService]},
  {path:'create-medicine',component:CreateMedicine,canActivate:[DoctorauthguardService]},
  {path:'update-patient/:id',component:UpdatePatient,canActivate:[DoctorauthguardService]},
  {path:'view-patient/:id',component:ViewPatient,canActivate:[DoctorauthguardService]},
  {path:'updatemedicine/:id',component:UpdateMedicine,canActivate:[DoctorauthguardService]},
  {path:'doclogin',component:Doctlogin},
  {path:'adlogin',component:Adlogin
  }

  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
