package com.kyosk.server.controllers;

import com.kyosk.server.dtos.request.BookItemRequestDto;
import com.kyosk.server.dtos.response.BookItemResponseDto;
import com.kyosk.server.services.BookItemService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * REST Controller for managing book items with API versioning.
 */
@RestController
@RequestMapping("/api/v1/books")
@RequiredArgsConstructor
@Validated
public class BookItemController {

    private final BookItemService bookItemService;

    /**
     * Create a new book item.
     *
     * @param requestDto the book item request data
     * @return the created book item as a response
     */
    @PostMapping
    public ResponseEntity<BookItemResponseDto> createBookItem(@Valid @RequestBody BookItemRequestDto requestDto) {
        BookItemResponseDto response = bookItemService.createBookItem(requestDto);
        return ResponseEntity.ok(response);
    }

    /**
     * Fetch all book items.
     *
     * @return a list of all book items
     */
    @GetMapping
    public ResponseEntity<List<BookItemResponseDto>> getAllBookItems() {
        List<BookItemResponseDto> response = bookItemService.getAllBookItems();
        return ResponseEntity.ok(response);
    }
}
