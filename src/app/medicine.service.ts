import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
    constructor(private httpClient:HttpClient) { }
    private baseURL="http://localhost:8080/api/v3/medicines";
    
    getMedicines():Observable<Medicine[]> {
        return this.httpClient.get<Medicine[]>(`${this.baseURL}`);

    }
    createMedicine(medicine:Medicine):Observable<Medicine>{
        return this.httpClient.post<Medicine>(`${this.baseURL}`,medicine);
    }

    getMedicineById(id:number):Observable<Medicine>{
        return this.httpClient.get<Medicine>(`${this.baseURL}/${id}`);
    }

    updateMedicine(id:number,medicine:Medicine):Observable<object>{
        return this.httpClient.put<Medicine>(`${this.baseURL}/${id}`,medicine);
    }
    delete(id:number):Observable<object>{
        return this.httpClient.delete(`${this.baseURL}/${id}`);

    }
}