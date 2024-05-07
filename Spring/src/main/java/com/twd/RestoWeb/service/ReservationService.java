package com.twd.RestoWeb.service;

import com.twd.RestoWeb.dto.ReservationReq;
import com.twd.RestoWeb.dto.ReservationWithTableName;
import com.twd.RestoWeb.entity.OurUsers;
import com.twd.RestoWeb.entity.Reservation;
import com.twd.RestoWeb.entity.TableResturant;
import com.twd.RestoWeb.repository.OurUserRepo;
import com.twd.RestoWeb.repository.ReservationRepository;
import com.twd.RestoWeb.repository.TableResturantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    private TableResturantRepository tableResturantRepository;

    @Autowired
    private OurUserRepo ourUserRepo;


    public List<Reservation> getAllReservations() {
        return reservationRepository.findAll();
    }

    public Optional<Reservation> getReservationById(int id) {
        return reservationRepository.findById(id);
    }

    public Integer findResturantTableIdByNameOfTable(String nameOfTable) {
        return tableResturantRepository.findResturantTableIdByNameOfTable(nameOfTable);
    }
    public boolean isTableNameValid(String tableName) {
        return tableResturantRepository.existsByNameOfTable(tableName);
    }


    public ReservationReq addReservation(ReservationReq reservation) {
            ReservationReq resp = new ReservationReq();
        try {
            TableResturant tableResturant = tableResturantRepository.findByNameOfTable(reservation.getNameOfTable());
            if (tableResturant == null) {
                resp.setStatusCode(400); // Bad request status code
                resp.setError("Table Not Found");
                return reservation;
            }
            Long tableId = (long) tableResturant.getResturantTable_id();
             Date date = reservation.getDate_reservation();
            Optional<Reservation> existingReservations = reservationRepository.findByTableResturantIdAndDateReservation(tableId, date);
            if (!existingReservations.isEmpty()) {
                resp.setStatusCode(400); // Bad request status code
                resp.setError("There is already a reservation for table " + reservation.getNameOfTable() + "at the specified time.");
               return resp;
            }
            Optional<OurUsers> user = ourUserRepo.findByEmail(reservation.getEmail());
           if (!user.isPresent()) {
              resp.setStatusCode(400); // Bad request status code
               resp.setError("User with email " + reservation.getEmail() + " not found.");
               return resp;
           }
            // Set the user in the reservation
            Reservation reservation1=new Reservation();

            reservation1.setDate_reservation(reservation.getDate_reservation());
            reservation1.setPhone_number(reservation.getPhone_number());
            reservation1.setUser(user.get());
            reservation1.setTableResturant(tableResturant);
            reservation1.setNum_of_guests(reservation.getNum_of_guests());
            Reservation reservationResult = reservationRepository.save(reservation1);
            if (reservationResult != null && reservationResult.getReservation_id() > 0) {
                resp.setReservation(reservationResult);
                resp.setMessage("Reservation Saved Successfully");
                resp.setStatusCode(200);
            }
        }
        catch (Exception e){
            resp.setStatusCode(500);
            resp.setError(e.getMessage());
        }
        return resp;
    }


    // Other methods for CRUD operations remain the same...

    // Method to check if the table name is valid

    public Reservation updateReservation(int id, Reservation updatedReservation) {
        if (reservationRepository.existsById(id)) {
            updatedReservation.setReservation_id(id);
            return reservationRepository.save(updatedReservation);
        }
        return null;
    }

    public void deleteReservation(int id) {
        reservationRepository.deleteById(id);
    }

    public List<ReservationWithTableName> findDatesByTableId(String nameOfTable) {
        TableResturant tableResturant= new TableResturant();
        tableResturant =tableResturantRepository.findByNameOfTable(nameOfTable);
        int tableId=tableResturant.getResturantTable_id();
        List<Object[]> results = reservationRepository.findDatesWithTableNameByTableId(tableId);
        List<ReservationWithTableName> reservations = new ArrayList<>();

        for (Object[] result : results) {
            if (result.length >= 1) { // Check if the array has at least two elements
                ReservationWithTableName reservationWithTableName = new ReservationWithTableName();
                reservationWithTableName.setDate_reservation((Date) result[0]);
                reservations.add(reservationWithTableName);
            }
        }

        return reservations;
    }
}
