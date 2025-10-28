import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';
@Component({
  selector: 'app-docdash',
  standalone: false,
  templateUrl: './docdash.html',
  styleUrl: './docdash.css',
})
export class Docdash {
  constructor(private patientService:PatientService,private router:Router,private docauth:DocauthService) {}
patients: Patient[] = [];
ngOnInit(): void {
  this.getPatients();
}
getPatients() {
this.patientService.getPatientList().subscribe(data => {
  this.patients = data;
})
}

Update(id: number) {
    this.router.navigate(['update-patient', id]);
  }

  

deletePatient(id:number){
  this.patientService.delete(id).subscribe(data=>{
    console.log(data);
    this.getPatients();  // ✅ correct
  })
}
view(id: number) {
    this.router.navigate(['view-patient', id]);
}

logout() {
  
  
  this.router.navigate(['home']); 
}
}
