package com.kyosk.server.services;

import com.kyosk.server.dtos.request.BookItemRequestDto;
import com.kyosk.server.dtos.response.BookItemResponseDto;
import com.kyosk.server.entities.BookItem;
import com.kyosk.server.mappers.BookItemMapper;
import com.kyosk.server.repositories.BookItemRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class BookItemService {
    private final BookItemRepository bookItemRepository;
    private final BookItemMapper bookItemMapper;


    /**
     * Create a new book item.
     *
     * @param requestDto the request data for creating a book item
     * @return the created book item as a response DTO
     */
    public BookItemResponseDto createBookItem(BookItemRequestDto requestDto) {
        log.info("Creating a new book item with title: {}", requestDto.getTitle());

        BookItem bookItem = bookItemMapper.toEntity(requestDto);

        // Save the entity
        BookItem savedBookItem = bookItemRepository.save(bookItem);

        log.info("Successfully created book item with ID: {}", savedBookItem.getId());

        // Map the saved entity to a response DTO
        return bookItemMapper.toDto(savedBookItem);
    }

    /**
     * Fetch all book items.
     *
     * @return a list of all book items as response DTOs
     */
    public List<BookItemResponseDto> getAllBookItems() {
        log.info("Fetching all book items");

        return bookItemRepository.findAll().stream()
                .map(bookItemMapper::toDto)
                .collect(Collectors.toList());
    }
}
