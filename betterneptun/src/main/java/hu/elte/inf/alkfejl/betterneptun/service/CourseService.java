package hu.elte.inf.alkfejl.betterneptun.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import hu.elte.inf.alkfejl.betterneptun.model.Course;
import hu.elte.inf.alkfejl.betterneptun.repository.CourseRepository;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;

    public List<Course> findAll() {
        return courseRepository.findAll();
    }
}
