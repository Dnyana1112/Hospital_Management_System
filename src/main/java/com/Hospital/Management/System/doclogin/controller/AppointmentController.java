package com.Hospital.Management.System.doclogin.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.Hospital.Management.System.doctlogin.entity.Appointment;
import com.Hospital.Management.System.doctlogin.repository.AppointmentsRepository;

@RestController
@RequestMapping("/api/v2/appointments")
@CrossOrigin(origins = "http://localhost:4200")
public class AppointmentController {

    private final AppointmentsRepository appointmentsRepository;

    public AppointmentController(AppointmentsRepository appointmentsRepository) {
        this.appointmentsRepository = appointmentsRepository;
    }

    // Create Appointment
    @PostMapping
    public Appointment createAppointment(@RequestBody Appointment appointment) {
        return appointmentsRepository.save(appointment);
    }

    // Get all Appointments
    @GetMapping
    public List<Appointment> getAllAppointments() {
        return appointmentsRepository.findAll();
    }

    // Delete Appointment by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteAppointment(@PathVariable Long id) {
        Appointment appointment = appointmentsRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Appointment Not Found With id " + id));
        appointmentsRepository.delete(appointment);

        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
