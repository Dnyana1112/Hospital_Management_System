import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
    constructor(private httpClient:HttpClient) { }

    private baseURL="http://localhost:8080/api/v1/patients";

    getPatientList():Observable<Patient[]> {
        return this.httpClient.get<Patient[]>(`${this.baseURL}`);

}

delete(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);

}

createPatient(patient:Patient):Observable<Patient>{
    return this.httpClient.post<Patient>(`${this.baseURL}`,patient);

}
getPatientById(id:number):Observable<Patient>{
    return this.httpClient.get<Patient>(`${this.baseURL}/${id}`);
}

updatePatient(id:number,patient:Patient):Observable<Patient>{
    return this.httpClient.put<Patient>(`${this.baseURL}/${id}`,patient);

}
}