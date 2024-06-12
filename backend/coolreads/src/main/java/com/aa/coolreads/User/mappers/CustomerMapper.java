package com.aa.coolreads.User.mappers;

import com.aa.coolreads.User.builder.CustomerBuilder;
import com.aa.coolreads.User.builder.SimpleDTOBuilder;
import com.aa.coolreads.User.builder.UserBuilder;
import com.aa.coolreads.User.dto.*;
import com.aa.coolreads.User.models.Bookshelf;
import com.aa.coolreads.User.models.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.stream.Collectors;


@Component
public class CustomerMapper {

    private final UserBuilder userBuilder;

    private final UserBuilder userDTOBuilder;

    private final BookshelfMapper bookshelfMapper;

    @Autowired
    public CustomerMapper(CustomerBuilder customerBuilder, SimpleDTOBuilder simpleDTOBuilder, BookshelfMapper bookshelfMapper) {
        this.userBuilder = customerBuilder;
        this.userDTOBuilder = simpleDTOBuilder;
        this.bookshelfMapper = bookshelfMapper;
    }

    public SimpleCustomerDTO toSimpleCustomerDTO(Customer customer) {

        return (SimpleCustomerDTO) this.userDTOBuilder.setUsername(customer.getUsername())
                .setPassword(customer.getPassword())
                .setEmail(customer.getEmail())
                .setName(customer.getName())
                .setGender(customer.getGender())
                .setPronouns(customer.getPronouns())
                .setBirthDate(customer.getBirthDate())
                .setCountry(customer.getCountry())
                .setDescription(customer.getDescription())
                .setInterests(customer.getInterests())
                .setProfileImageUrl(customer.getProfileImageUrl())
                .setProfileBannerUrl(customer.getProfileBannerUrl()).build();
    }

    public SimpleCustomerDTO toSimpleCustomerDTO(Customer customer, Bookshelf bookshelf){
        SimpleCustomerDTO simpleCustomerDTO = this.toSimpleCustomerDTO(customer);

        simpleCustomerDTO.setHighlightedBookshelf(this.bookshelfMapper.toBookShelfDTO(bookshelf));

        return simpleCustomerDTO;
    }

    public Customer toCustomer(RegisterDTO registerDTO){
        return (Customer) this.userBuilder.setUsername(registerDTO.getUsername())
                .setPassword(registerDTO.getPassword())
                .setEmail(registerDTO.getEmail()).build();
    }

}
