package com.aa.coolreads.User.models;

import com.aa.coolreads.Book.models.Book;
import com.aa.coolreads.Book.models.Genre;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;

import java.io.Serializable;
import java.util.Date;
import java.util.Set;

@Entity
public class Author extends Customer implements Serializable{

    @OneToMany
    public Set<Book> booksCreated;

    public Author(){super();}

    public Author(String username, String password, String email, String name, String gender, String pronouns, Date birthDate, String country, String description, String interests, String profileImageUrl, String profileBannerUrl, Set<Genre> favoriteGenres, Set<Bookshelf> bookshelves, Set<Book> booksCreated) {
        super(username, password, email, name, gender, pronouns, birthDate, country, description, interests, profileImageUrl, profileBannerUrl, favoriteGenres, bookshelves);
        this.booksCreated = booksCreated;
    }

    public Set<Book> getBooksCreated() {
        return booksCreated;
    }

    public void setBooksCreated(Set<Book> booksCreated) {
        this.booksCreated = booksCreated;
    }
}