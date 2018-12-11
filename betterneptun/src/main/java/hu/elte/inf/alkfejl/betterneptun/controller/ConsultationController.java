package hu.elte.inf.alkfejl.betterneptun.controller;

import hu.elte.inf.alkfejl.betterneptun.AuthenticatedUser;
import hu.elte.inf.alkfejl.betterneptun.model.Consultation;
import hu.elte.inf.alkfejl.betterneptun.service.ConsultationService;

import java.util.List;
import java.util.Optional;

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
@RequestMapping("/api/consultation")
public class ConsultationController {

    @Autowired
    private ConsultationService consultationService;

    @Autowired
    private AuthenticatedUser authenticatedUser;

    @CrossOrigin
    @GetMapping("")
    public ResponseEntity<List<Consultation>> findAll() {
        return ResponseEntity.ok(consultationService.findAll());
    }

    @CrossOrigin
    @GetMapping("/{consultationNo}")
    public ResponseEntity<Consultation> findByConsultationNo(@PathVariable("consultationNo") int consultationNo) {
        Optional<Consultation> optionalConsultation = consultationService.findByConsultationNo(consultationNo);

        if (optionalConsultation.isPresent()) {
            return ResponseEntity.ok(optionalConsultation.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @CrossOrigin
    @PostMapping("/add")
    public ResponseEntity<Consultation> save(@RequestBody Consultation consultation) {
        return ResponseEntity.ok(consultationService.save(consultation));
    }

    @CrossOrigin
    @PutMapping("/{consultationNo}")
    public ResponseEntity<Consultation> update(@RequestBody Consultation consultation, @PathVariable("consultationNo") int consultationNo) {
        Optional<Consultation> optionalOriginalconsultation = consultationService.findByConsultationNo(consultationNo);

        if (optionalOriginalconsultation.isPresent()) {
            Consultation originalConsultation = optionalOriginalconsultation.get();

            if (authenticatedUser.getUser().getName().equals(originalConsultation.getCourse().getUser().getName())) {
                consultation.setConsultationNo(consultationNo);
                return ResponseEntity.ok(consultationService.save(consultation));
            } else {
                return ResponseEntity.status(401).build();
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @CrossOrigin
    @DeleteMapping("/{consultationNo}")
    public ResponseEntity update(@PathVariable("consultationNo") int consultationNo) {
        Optional<Consultation> optionalConsultation = consultationService.findByConsultationNo(consultationNo);

        if (optionalConsultation.isPresent()) {
            consultationService.delete(optionalConsultation.get());
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
