package com.aa.coolreads.User.repositories;

import com.aa.coolreads.User.models.Bookshelf;
import com.aa.coolreads.User.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.Set;

@Repository
public interface BookshelfRepository extends JpaRepository<Bookshelf, Long> {

    @Query(value = "SELECT b FROM Bookshelf b WHERE b.name = :name AND b.customer = :customer")
    Optional<Bookshelf> findBookshelfByNameAndCustomer(String name, Customer customer);

    @Query(value = "SELECT b FROM Bookshelf b WHERE b.customer = :customer")
    Set<Bookshelf> findBookshelvesByCustomer(Customer customer);
}
