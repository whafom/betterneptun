package hu.elte.inf.alkfejl.betterneptun.repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

import hu.elte.inf.alkfejl.betterneptun.model.Consultation;

@Repository
public interface ConsultationRepository extends CrudRepository<Consultation, Integer> {

    @Override
    public List<Consultation> findAll();
}
