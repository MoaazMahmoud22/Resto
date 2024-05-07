package com.twd.RestoWeb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories(basePackages = "com.twd.RestoWeb.repository")
@SpringBootApplication
public class RestoWebApp {

	public static void main(String[] args) {
		SpringApplication.run(RestoWebApp.class, args);
	}

}
