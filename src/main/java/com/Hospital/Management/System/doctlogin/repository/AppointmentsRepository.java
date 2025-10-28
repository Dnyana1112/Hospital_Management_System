package com.Hospital.Management.System.doctlogin.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Hospital.Management.System.doctlogin.entity.Appointment;

@Repository
public interface AppointmentsRepository extends JpaRepository<Appointment, Long> {

}
