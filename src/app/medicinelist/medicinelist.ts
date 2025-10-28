import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';
import { Router } from '@angular/router';


@Component({
  selector: 'app-medicinelist',
  standalone: true, 
 imports: [CommonModule], 
  templateUrl: './medicinelist.html',
  styleUrls: ['./medicinelist.css']
})
export class Medicinelist implements OnInit {
  medicines: Medicine[] = [];

  constructor(private medicineService: MedicineService,private router:Router) {}

  ngOnInit(): void {
    this.loadMedicines();
  }

  loadMedicines(): void {
    this.medicineService.getMedicines().subscribe({
      next: (data) => (this.medicines = data),
      error: (err) => console.error('Error loading medicines', err)
    });
  }

getMedicine(){
    this.medicineService.getMedicines().subscribe(data=>{
      this.medicines=data;
    })
}

  update(id: number) {
this.router.navigate(['updatemedicine', id]);
  }

delete(id: number) {
this.medicineService.delete(id).subscribe(data=>{
  console.log(data);
  this.getMedicine();
})
}
}
