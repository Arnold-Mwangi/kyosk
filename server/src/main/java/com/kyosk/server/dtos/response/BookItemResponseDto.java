package com.kyosk.server.dtos.response;

import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * Data Transfer Object (DTO) for returning book item details in API responses.
 * Encapsulates the details of a book item to be shared with the client.
 */
@Data
public class BookItemResponseDto {

    /**
     * The unique identifier of the book item.
     */
    private Long id;

    /**
     * The title of the book.
     */
    private String title;

    /**
     * The author of the book.
     */
    private String author;

    /**
     * The genre or category of the book.
     */
    private String genre;

    /**
     * The publication date of the book.
     */
    private LocalDate publicationDate;

    /**
     * The International Standard Book Number (ISBN) of the book.
     */
    private String isbn;

    /**
     * A brief description of the book.
     */
    private String description;

    /**
     * The timestamp when the book item was created.
     */
    private LocalDateTime createdAt;

    /**
     * The timestamp when the book item was last updated.
     */
    private LocalDateTime updatedAt;
}
