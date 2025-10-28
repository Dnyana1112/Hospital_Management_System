import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app.component';
import { CreateAppointment } from './create-appointment/create-appointment';
import { Home } from './home/home';
import { CommonModule } from '@angular/common';
import { CreatePatient } from './create-patient/create-patient';
import { CreateMedicine } from './create-medicine/create-medicine';
import { UpdatePatient } from './update-patient/update-patient';
import { ViewPatient } from './view-patient/view-patient';
import { UpdateMedicine } from './update-medicine/update-medicine';
import { Doctlogin } from './doctlogin/doctlogin'; 
import { RouterModule } from '@angular/router';
import { Adlogin } from './adlogin/adlogin';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  
    App,
    CreateAppointment,
    Home,
    CreatePatient,
    CreateMedicine,
    UpdatePatient,
    ViewPatient,
    UpdateMedicine,
    Doctlogin,
    Adlogin
  ],
  imports: [
     NgOptimizedImage,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
     FormsModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
