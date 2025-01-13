package com.kyosk.server.dtos.request;

import jakarta.validation.constraints.Size;
import lombok.Data;

import java.time.LocalDate;

/**
 * Data Transfer Object (DTO) for handling incoming book item creation requests.
 * Encapsulates the required details for creating or updating a book item.
 */
@Data
public class BookItemRequestDto {

    /**
     * The title of the book.
     * This field is mandatory and must not exceed 255 characters.
     */
    private String title;

    /**
     * The author of the book.
     * This field is mandatory and must not exceed 255 characters.
     */
    private String author;

    /**
     * The genre or category of the book.
     * Optional field.
     */
    private String genre;

    /**
     * The publication date of the book.
     * This field is mandatory.
     */
    private LocalDate publicationDate;

    /**
     * The International Standard Book Number (ISBN) of the book.
     * This field is mandatory and must be unique.
     */
    @Size(max = 20, message = "ISBN must not exceed 20 characters.")
    private String isbn;

    /**
     * A brief description of the book.
     * Optional field.
     */
    private String description;
}
