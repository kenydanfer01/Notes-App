package com.note.backend.service;

import com.note.backend.model.Note;

import java.util.List;

public interface NoteService {

    Note createNote(Note note);

    Note updateNote(Long id, Note note);

    void deleteNote(Long id);

    Note archiveNote(Long id);

    Note unarchiveNote(Long id);

    List<Note> getActiveNotes();

    List<Note> getArchivedNotes();
}
