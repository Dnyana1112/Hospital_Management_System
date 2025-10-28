import { Component } from '@angular/core';
import { Patient } from '../patient';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-update-patient',
  standalone: false,
  templateUrl: './update-patient.html',
  styleUrl: './update-patient.css',
})

export class UpdatePatient {

  id:number=0;
  constructor(private route:ActivatedRoute,private patientService:PatientService,private router:Router) { }
patient:Patient=new Patient();

ngOnInit(): void {
  this.id=this.route.snapshot.params['id']; 
  this.patientService.getPatientById(this.id).subscribe(data=>{
    this.patient=data;
  })   
}
onsubmit() {
this.patientService.updatePatient(this.id,this.patient).subscribe(data=>{
  console.log(data); 
  this.gotDocDash();   
});
}

gotDocDash(){
  this.router.navigate(['docdash']);
}
}
