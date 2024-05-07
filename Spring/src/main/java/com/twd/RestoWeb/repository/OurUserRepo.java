package com.twd.RestoWeb.repository;

import com.twd.RestoWeb.entity.OurUsers;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface OurUserRepo extends JpaRepository<OurUsers, Integer> {

    Optional<OurUsers> findByEmail(String email);


    boolean existsByUsername(String username);

    boolean existsByEmail(String email);

    Optional<OurUsers> findByUsername(String username);
}
