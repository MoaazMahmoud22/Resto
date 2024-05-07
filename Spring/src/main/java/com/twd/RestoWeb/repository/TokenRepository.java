package com.twd.RestoWeb.repository;

import com.twd.RestoWeb.entity.Tokens;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
import java.util.Optional;

public interface TokenRepository extends JpaRepository<Tokens, Integer> {
    
    @Query("""
        SELECT t FROM Tokens t JOIN t.user u WHERE u.id = :userId AND t.loggedOut = false
        """)

    List<Tokens> findAllTokensByUser(Integer userId);
        
    Optional<Tokens> findByToken(String token);
    
}
 


