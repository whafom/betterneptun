package hu.elte.inf.alkfejl.betterneptun.controller;

import hu.elte.inf.alkfejl.betterneptun.AuthenticatedUser;
import hu.elte.inf.alkfejl.betterneptun.model.Course;
import hu.elte.inf.alkfejl.betterneptun.service.CourseService;

import java.util.List;
import java.util.Optional;
import java.util.ArrayList;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api/course")
public class CourseController {

    @Autowired
    private CourseService courseService;

    @Autowired
    private AuthenticatedUser authenticatedUser;

    @CrossOrigin
    @GetMapping("")
    public ResponseEntity<List<Course>> findAll() {
        return ResponseEntity.ok(courseService.findAll());
    }

    @CrossOrigin
    @GetMapping("/{courseNo}")
    public ResponseEntity<Course> findByCourseNo(@PathVariable("courseNo") int courseNo) {
        Optional<Course> optionalCourse = courseService.findByCourseNo(courseNo);

        if (optionalCourse.isPresent()) {
            return ResponseEntity.ok(optionalCourse.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @CrossOrigin
    @PostMapping("/add")
    public ResponseEntity<Course> save(@RequestBody Course course) {
        course.setTakenSpace(0);
        course.setConsultations(new ArrayList());
        course.setUsers(new ArrayList());
        course.setUser(authenticatedUser.getUser());
        return ResponseEntity.ok(courseService.save(course));
    }

    @CrossOrigin
    @PutMapping("/{courseNo}")
    public ResponseEntity<Course> update(@RequestBody Course course, @PathVariable("courseNo") int courseNo) {
        Optional<Course> optionalOriginalcourse = courseService.findByCourseNo(courseNo);

        if (optionalOriginalcourse.isPresent()) {
            Course originalCourse = optionalOriginalcourse.get();

            if (authenticatedUser.getUser().getName().equals(originalCourse.getUser().getName())) {
                course.setCourseNo(courseNo);
                course.setConsultations(originalCourse.getConsultations());
                course.setUsers(originalCourse.getUsers());
                return ResponseEntity.ok(courseService.save(course));
            } else {
                return ResponseEntity.status(401).build();
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @CrossOrigin
    @DeleteMapping("/{courseNo}")
    public ResponseEntity update(@PathVariable("courseNo") int courseNo) {
        Optional<Course> optionalCourse = courseService.findByCourseNo(courseNo);

        if (optionalCourse.isPresent()) {
            courseService.delete(optionalCourse.get());
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
