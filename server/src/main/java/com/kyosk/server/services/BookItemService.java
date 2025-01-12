package com.kyosk.server.services;

import com.kyosk.server.repositories.BookItemRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class BookItemService {
    private final BookItemRepository bookItemRepository;
}
