import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-medicine',
  standalone: false,
  templateUrl: './create-medicine.html',
  styleUrl: './create-medicine.css',
})
export class CreateMedicine {
medicine:Medicine=new Medicine();

constructor(private medicineservice:MedicineService,private router:Router) { }

saveMedicine(){
  this.medicineservice.createMedicine(this.medicine).subscribe(data=>{
    console.log(data);
    this.goToMedicine();
})
}
onsubmit() {
this.saveMedicine();
}
goToMedicine(){
this.router.navigate(['/medicinelist']);
}
}
