package hu.elte.inf.alkfejl.betterneptun.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "consultations")
public class Consultation implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;

    @Column
    private String name;

    @Column
    private String room;

    @Column
    private String timeDay;

    @Column
    private String timeHour;

    @ManyToOne
    @JoinColumn
    @JsonIgnore
    private Course course;

}
