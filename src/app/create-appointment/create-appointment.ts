import { Component } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-appointment',
  standalone: false,
  templateUrl: './create-appointment.html',
  styleUrl: './create-appointment.css',
})
export class CreateAppointment {

appointment:Appointment=new Appointment();

constructor(private appointmentService:AppointmentService,private router:Router) { }

saveAppointment(){
  this.appointmentService.createAppointment(this.appointment).subscribe(data=>{
    console.log(data);
    this.goToAppointment();
  });
}



onsubmit() {
this.saveAppointment();
}

goToAppointment(){
this.router.navigate(['/appointmentlist']);
}
}
