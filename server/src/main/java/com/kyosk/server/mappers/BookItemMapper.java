package com.kyosk.server.mappers;

import com.kyosk.server.dtos.request.BookItemRequestDto;
import com.kyosk.server.dtos.response.BookItemResponseDto;
import com.kyosk.server.entities.BookItem;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface BookItemMapper {
    BookItemResponseDto toDto(BookItem bookItem);
    BookItem toEntity(BookItemRequestDto bookItemRequestDto);
}
