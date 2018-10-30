package hu.elte.inf.alkfejl.betterneptun.repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

import hu.elte.inf.alkfejl.betterneptun.model.Course;

@Repository
public interface CourseRepository extends CrudRepository<Course, Integer> {

    @Override
    public List<Course> findAll();
}
