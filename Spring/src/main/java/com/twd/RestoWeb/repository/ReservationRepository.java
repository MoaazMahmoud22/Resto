package com.twd.RestoWeb.repository;

import com.twd.RestoWeb.dto.ReservationWithTableName;
import com.twd.RestoWeb.entity.Reservation;
import com.twd.RestoWeb.entity.TableResturant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Integer> {
    @Query("SELECT reservation.tableResturant FROM Reservation reservation WHERE reservation.tableResturant.id = :tableResturant AND reservation.date_reservation = :date_reservation")
    Optional<Reservation> findByTableResturantIdAndDateReservation(Long tableResturant, Date date_reservation);

    @Query("SELECT r.date_reservation FROM Reservation r WHERE r.tableResturant.resturantTable_id = :tableId")
    List<Object[]> findDatesWithTableNameByTableId(int tableId);
}

