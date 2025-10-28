import { Component } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.html',
  styleUrl: './appointment.css',
  standalone: true,          // optional if declared in AppModule
  imports: [CommonModule,RouterModule] 
})
export class AppointmentComponent{

  appointments:Appointment[] = [];
  constructor(private appointmentService:AppointmentService) {}

  ngOnInit():void{
    this.getAppointments();
  }

  getAppointments(){

    this.appointmentService.getAllAppointments().subscribe(data=>{
      this.appointments = data;
    })
}

  delete(id:number){
    this.appointmentService.deleteAppointment(id).subscribe(data=>{
      console.log(data);
      this.getAppointments();
    })
  }
}

export { Appointment };
