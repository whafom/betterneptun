package hu.elte.inf.alkfejl.betterneptun.repository;

import hu.elte.inf.alkfejl.betterneptun.model.User;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {

    Optional<User> findByNameAndPassword(String name, String password);

    User findByName(String name);
}
