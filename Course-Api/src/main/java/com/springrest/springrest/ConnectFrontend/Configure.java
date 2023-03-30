package com.springrest.springrest.ConnectFrontend;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class Configure implements WebMvcConfigurer {

    // ...
	@Override
	public void addCorsMappings(CorsRegistry registry) {
	    registry.addMapping("/courses")
	            .allowedOrigins("http://localhost:3000")
	            .allowedMethods("GET", "POST", "PUT", "DELETE")
	            .allowedHeaders("*");
	}

}

