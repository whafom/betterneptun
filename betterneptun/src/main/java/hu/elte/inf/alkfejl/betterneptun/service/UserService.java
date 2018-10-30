package hu.elte.inf.alkfejl.betterneptun.service;

import hu.elte.inf.alkfejl.betterneptun.model.User;
import hu.elte.inf.alkfejl.betterneptun.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.SessionScope;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Service
@SessionScope
@NoArgsConstructor
@AllArgsConstructor
@Getter
public class UserService {

    private User user;

    @Autowired
    private UserRepository userRepository;

    public User login(@NonNull User user) throws UserNotValidException {
        if (isValid(user)) {
            return this.user = userRepository.findByName(user.getName());
        }

        throw new UserNotValidException();
    }

    private boolean isValid(User user) {
        return userRepository.findByNameAndPassword(user.getName(), user.getPassword()).isPresent();
    }

    public boolean isLoggedIn() {
        return user != null;
    }

    public User getLoggedInUser() {
        return user;
    }

    public User logout() {
        return user = null;
    }
}
