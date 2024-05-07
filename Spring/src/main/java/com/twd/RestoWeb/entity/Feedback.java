package com.twd.RestoWeb.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "feedback")
public class Feedback {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "feedback_id")
    private int id;
    @Column(name = "username")
    private String Username;
    @Column(name = "content")
    private String Content;
    public Feedback() {
    }

    public Feedback(String username, String content) {
        this.Username = username;
        this.Content = content;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return Username;
    }

    public void setUsername(String username) {
        this.Username = username;
    }

    public String getContent() {
        return Content;
    }

    public void setContent(String content) {
        this.Content = content;
    }

    @Override
    public String toString() {
        return "feedback{" +
                "id=" + id +
                ", username='" + Username + '\'' +
                ", content='" + Content + '\'' +
                '}';
    }
}

