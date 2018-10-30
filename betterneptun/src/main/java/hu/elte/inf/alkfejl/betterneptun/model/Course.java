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
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.OneToMany;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import java.io.Serializable;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "courses")
public class Course implements Serializable {

    private enum Type {

        EA, GY,
    }

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

    @Column
    private int takenSpace;

    @Column
    private int maxSpace;

    @Column
    @Enumerated(EnumType.STRING)
    private Type type;

    @OneToMany(mappedBy = "course")
    private List<Consultation> consultations;

    @ManyToOne
    @JoinColumn
    @JsonIgnore
    private User user;

    @ManyToMany
    @JoinTable
    private List<User> users;
}
