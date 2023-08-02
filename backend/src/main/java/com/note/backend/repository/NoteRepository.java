package com.note.backend.repository;

import com.note.backend.model.Note;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface NoteRepository extends CrudRepository<Note, Long> {
    List<Note> findAllByIsActive(Boolean isActive);
}
