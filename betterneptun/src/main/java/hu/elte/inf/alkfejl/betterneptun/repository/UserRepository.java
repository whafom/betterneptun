package hu.elte.inf.alkfejl.betterneptun.repository;

import hu.elte.inf.alkfejl.betterneptun.model.User;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {

    Optional<User> findByName(String name);
}
