

import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { AdminauthService } from '../adminauth.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.html',
  styleUrls: ['./admindash.css'],
  
  
 
})
export class AdminDashComponent implements OnInit {
  patients: Patient[] = [];

  constructor(
    private patientService: PatientService,
    private adminauthService: AdminauthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPatientList();
  }

  getPatientList() {
    this.patientService.getPatientList().subscribe(data => {
      this.patients = data;
    });
  }

  deletePatient(id: number) {
    this.patientService.delete(id).subscribe(data => {
      console.log('Deleted:', data);
      this.getPatientList();  
    });
  }

  logout() {
    this.adminauthService.logout();
    this.router.navigate(['home']);
  }
}
