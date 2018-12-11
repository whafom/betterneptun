package hu.elte.inf.alkfejl.betterneptun.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

import hu.elte.inf.alkfejl.betterneptun.model.Consultation;
import hu.elte.inf.alkfejl.betterneptun.repository.ConsultationRepository;

@Service
public class ConsultationService {

    @Autowired
    private ConsultationRepository consultationRepository;

    public List<Consultation> findAll() {
        return consultationRepository.findAll();
    }

    public Optional<Consultation> findByConsultationNo(int consultationNo) {
        return consultationRepository.findById(consultationNo);
    }

    public Consultation save(Consultation consultation) {
        return consultationRepository.save(consultation);
    }

    public void delete(Consultation consultation) {
        consultationRepository.delete(consultation);
    }
}
