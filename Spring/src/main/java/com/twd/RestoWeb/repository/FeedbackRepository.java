package com.twd.RestoWeb.repository;

import com.twd.RestoWeb.entity.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
public interface FeedbackRepository extends JpaRepository<Feedback, Integer> {

}
