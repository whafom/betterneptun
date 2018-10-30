package hu.elte.inf.alkfejl.betterneptun.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.List;

import hu.elte.inf.alkfejl.betterneptun.model.Course;
import hu.elte.inf.alkfejl.betterneptun.service.CourseService;

@RestController
@RequestMapping("/api/course")
public class CourseController {

    @Autowired
    private CourseService courseService;

    @GetMapping("/all")
    public List<Course> all() {
        return courseService.findAll();
    }

    @GetMapping("/hash")
    public String hash() {
        return new BCryptPasswordEncoder().encode("password");
    }
}
