import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private baseURL = "http://localhost:8080/api/v2/appointments";

  constructor(private httpClient: HttpClient) { }

  // Get all appointments
  getAllAppointments(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(`${this.baseURL}`);
  }

  // Create a new appointment
  createAppointment(appointment: Appointment): Observable<Appointment> {
    return this.httpClient.post<Appointment>(`${this.baseURL}`, appointment);
  }

  // Delete appointment by ID
//   deleteAppointment(id: number): Observable<any> {
//     return this.httpClient.delete(`${this.baseURL}/${id}`);
//   }

  deleteAppointment(id: number): Observable<object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
