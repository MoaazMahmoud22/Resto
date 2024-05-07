package com.twd.RestoWeb.controller;

import com.twd.RestoWeb.entity.Feedback;
import com.twd.RestoWeb.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/public/feedback")
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    @GetMapping
    public List<Feedback> getAllFeedbacks() {
        return feedbackService.findAllFeedbacks();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Feedback> getFeedbackById(@PathVariable int id) {
        return feedbackService.findFeedbackById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/create")
    public Feedback createFeedback(@RequestBody Feedback feedback) {
        return feedbackService.saveFeedback(feedback);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Feedback> updateFeedback(@PathVariable int id, @RequestBody Feedback feedback) {
        return feedbackService.findFeedbackById(id)
                .map(storedFeedback -> {
                    storedFeedback.setContent(feedback.getContent());
                    storedFeedback.setUsername(feedback.getUsername());
                    Feedback updatedFeedback = feedbackService.saveFeedback(storedFeedback);
                    return ResponseEntity.ok(updatedFeedback);
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFeedback(@PathVariable int id) {
        return feedbackService.findFeedbackById(id)
                .map(feedback -> {
                    feedbackService.deleteFeedback(id);
                    return ResponseEntity.ok().<Void>build();
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}