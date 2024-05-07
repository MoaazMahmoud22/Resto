package com.twd.RestoWeb.repository;

import com.twd.RestoWeb.entity.TableResturant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TableResturantRepository extends JpaRepository<TableResturant, Integer> {
    // You can define additional query methods here if needed
    boolean existsByNameOfTable(String nameOfTable);

    TableResturant findByNameOfTable(String nameOfTable);

    Integer findResturantTableIdByNameOfTable(String nameOfTable);
}
