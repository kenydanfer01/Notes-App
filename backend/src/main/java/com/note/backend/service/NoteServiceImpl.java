package com.note.backend.service;

import com.note.backend.model.Note;
import com.note.backend.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NoteServiceImpl implements NoteService {

    private final NoteRepository noteRepository;

    @Autowired
    public NoteServiceImpl(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    @Override
    public Note createNote(Note note) {
        return noteRepository.save(note);
    }

    @Override
    public Note updateNote(Long id, Note updatedNote) {
        Optional<Note> optionalNote = noteRepository.findById(id);
        if (optionalNote.isPresent()) {
            Note existingNote = optionalNote.get();
            existingNote.setTitle(updatedNote.getTitle());
            existingNote.setContent(updatedNote.getContent());
            existingNote.setActive(updatedNote.getActive());
            return noteRepository.save(existingNote);
        }
        return null;
    }

    @Override
    public void deleteNote(Long id) {
        noteRepository.deleteById(id);
    }

    @Override
    public Note archiveNote(Long id) {
        Optional<Note> optionalNote = noteRepository.findById(id);
        if (optionalNote.isPresent()) {
            Note note = optionalNote.get();
            note.setActive(false);
            return noteRepository.save(note);
        }
        return null;
    }

    @Override
    public Note unarchiveNote(Long id) {
        Optional<Note> optionalNote = noteRepository.findById(id);
        if (optionalNote.isPresent()) {
            Note note = optionalNote.get();
            note.setActive(true);
            return noteRepository.save(note);
        }
        return null;
    }

    @Override
    public List<Note> getActiveNotes() {
        return noteRepository.findAllByIsActive(true);
    }

    @Override
    public List<Note> getArchivedNotes() {
        return noteRepository.findAllByIsActive(false);
    }
}
