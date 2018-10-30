package hu.elte.inf.alkfejl.betterneptun.controller;

import hu.elte.inf.alkfejl.betterneptun.model.User;
import hu.elte.inf.alkfejl.betterneptun.service.UserNotValidException;
import hu.elte.inf.alkfejl.betterneptun.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("")
    public ResponseEntity<User> user() {
        if (userService.isLoggedIn()) {
            return ResponseEntity.ok(userService.getLoggedInUser());
        }
        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User user) {
        try {
            return ResponseEntity.ok(userService.login(user));
        } catch (UserNotValidException | NullPointerException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<User> logout(@RequestBody User user) {
        return ResponseEntity.ok(userService.logout());
    }
}
