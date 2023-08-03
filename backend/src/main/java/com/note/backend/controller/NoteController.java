package com.note.backend.controller;

import com.note.backend.model.Note;
import com.note.backend.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notes")
@CrossOrigin(origins = "*")
public class NoteController {

    private final NoteService noteService;

    @Autowired
    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @PostMapping
    public ResponseEntity<Note> createNote(@RequestBody Note note) {
        Note createdNote = noteService.createNote(note);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdNote);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Note> updateNote(@PathVariable Long id, @RequestBody Note updatedNote) {
        Note note = noteService.updateNote(id, updatedNote);
        if (note != null) {
            return ResponseEntity.ok(note);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteNote(@PathVariable Long id) {
        noteService.deleteNote(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/archive/{id}")
    public ResponseEntity<Note> archiveNote(@PathVariable Long id) {
        Note note = noteService.archiveNote(id);
        if (note != null) {
            return ResponseEntity.ok(note);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/unarchive/{id}")
    public ResponseEntity<Note> unarchiveNote(@PathVariable Long id) {
        Note note = noteService.unarchiveNote(id);
        if (note != null) {
            return ResponseEntity.ok(note);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/active")
    public ResponseEntity<List<Note>> getActiveNotes() {
        List<Note> activeNotes = noteService.getActiveNotes();
        return ResponseEntity.ok(activeNotes);
    }

    @GetMapping("/archived")
    public ResponseEntity<List<Note>> getArchivedNotes() {
        List<Note> archivedNotes = noteService.getArchivedNotes();
        return ResponseEntity.ok(archivedNotes);
    }
}
