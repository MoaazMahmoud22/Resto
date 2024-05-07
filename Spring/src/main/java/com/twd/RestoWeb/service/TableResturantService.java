package com.twd.RestoWeb.service;

import com.twd.RestoWeb.entity.TableResturant;
import com.twd.RestoWeb.repository.TableResturantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class TableResturantService {

    @Autowired
    private TableResturantRepository tableResturantRepository;

    public List<TableResturant> getAllTableResturants() {
        return tableResturantRepository.findAll();
    }

    public Optional<TableResturant> getTableResturantById(int id) {
        return tableResturantRepository.findById(id);
    }

    public TableResturant addTableResturant(TableResturant tableResturant) {
        return tableResturantRepository.save(tableResturant);
    }

    public TableResturant updateTableResturant(int id, TableResturant updatedTableResturant) {
        if (tableResturantRepository.existsById(id)) {
            updatedTableResturant.setResturantTable_id(id);
            return tableResturantRepository.save(updatedTableResturant);
        }
        return null;
    }

    public void deleteTableResturant(int id) {
        tableResturantRepository.deleteById(id);
    }
}
