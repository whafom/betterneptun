package hu.elte.inf.alkfejl.betterneptun.controller;

import hu.elte.inf.alkfejl.betterneptun.AuthenticatedUser;
import hu.elte.inf.alkfejl.betterneptun.model.User;
import hu.elte.inf.alkfejl.betterneptun.model.User.Role;
import hu.elte.inf.alkfejl.betterneptun.repository.UserRepository;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticatedUser authenticatedUser;

    @CrossOrigin
    @PostMapping("")
    public ResponseEntity<User> register(@RequestBody User user) {
        if (authenticatedUser.getUser().getRole() != Role.ADMIN) {
            return ResponseEntity.badRequest().build();
        }

        Optional<User> optionalUser = userRepository.findByName(user.getName());

        if (optionalUser.isPresent()) {
            return ResponseEntity.badRequest().build();
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setCourses(new ArrayList());

        return ResponseEntity.ok(userRepository.save(user));
    }

    @CrossOrigin
    @PostMapping("/sign-in")
    public ResponseEntity<User> login(@RequestBody User user) {
        User user2 = userRepository.findByName(user.getName()).get();
        return ResponseEntity.ok(user2);
    }

    @CrossOrigin
    @GetMapping("/mydetails")
    public ResponseEntity<User> findByUserNo() {
        Optional<User> optionalUser = userRepository.findByName(authenticatedUser.getUser().getName());

        if (optionalUser.isPresent()) {
            return ResponseEntity.ok(optionalUser.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @CrossOrigin
    @PutMapping("/mydetails")
    public ResponseEntity<User> update(@RequestBody User user) {
        Optional<User> optionalOriginaluser = userRepository.findByName(authenticatedUser.getUser().getName());

        if (optionalOriginaluser.isPresent()) {
            User originalUser = optionalOriginaluser.get();

            user.setName(originalUser.getName());
            user.setRole(originalUser.getRole());
            return ResponseEntity.ok(userRepository.save(user));

        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @CrossOrigin
    @DeleteMapping("/mydetails")
    public ResponseEntity update() {
        Optional<User> optionalUser = userRepository.findByName(authenticatedUser.getUser().getName());

        if (optionalUser.isPresent()) {
            userRepository.delete(optionalUser.get());
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
