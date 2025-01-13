package com.kyosk.server.repositories;

import com.kyosk.server.entities.BookItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookItemRepository extends JpaRepository<BookItem, Long> {
}
