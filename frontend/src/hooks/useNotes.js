import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { notesReducer } from "../reducers/notesReducer";
import { getActiveNotes, getArchivedNotes, saveNote, updateNote, deleteNote, archiveNote, unarchiveNote } from "../services/noteService";

const initialNotes = [];

const initialNoteForm = {
  id: 0,
  title: "",
  content: "",
  isActive: true,
};

export const useNotes = () => {
  const [notes, dispatch] = useReducer(notesReducer, initialNotes);
  const [noteSelected, setNoteSelected] = useState(initialNoteForm);
  const [visibleForm, setVisibleForm] = useState(false);
  const navigate = useNavigate();

  const getNotesActive = async () => {
    const result = await getActiveNotes();
    
    dispatch({
      type: "loadingActiveNotes",
      payload: result.data,
    });
  };

  const getNotesArchive = async () => {
    const result = await getArchivedNotes();
    
    dispatch({
      type: "loadingArchiveNotes",
      payload: result.data,
    });
  };

  const handlerAddNote = async (note) => {
    let response;

    if (note.id === 0) {
      response = await saveNote(note);
    } else {
      response = await updateNote(note.id, note);
    }

    dispatch({
      type: note.id === 0 ? "addNote" : "updateNote",
      payload: response,
    });

    Swal.fire(
      note.id === 0 ? "Note created" : "Updated Note",
      note.id === 0 ? "The note has been created successfully!" : "The note has been successfully updated!",
      "success"
    );
    handlerCloseForm();
    navigate("/");
  };

  const handlerRemoveNote = (id) => {
    Swal.fire({
      title: "Are you sure you want to delete?",
      text: "Warning the note will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteNote(id);
        dispatch({
          type: "removeNote",
          payload: id,
        });
        Swal.fire("Note removed!", "The note has been successfully removed!", "success");
      }
    });
  };

  const handlerArchiveNote = async (id) => {
    try {
      const response = await archiveNote(id);
      dispatch({
        type: "archiveNote",
        payload: response,
      });
      Swal.fire("Note archived!", "The note has been archived successfully!", "success");
      navigate("/archived");
    } catch (error) {
      console.error("Error archiving note:", error);
      Swal.fire("Error", "An error occurred while archiving the note", "error");
    }
  };

  const handlerUnarchiveNote = async (id) => {
    try {
      const response = await unarchiveNote(id);
      dispatch({
        type: "unarchiveNote",
        payload: response,
      });
      Swal.fire("Note unarchived!", "The note has been unarchived successfully!", "success");
      navigate("/");
    } catch (error) {
      console.error("Error unarchiving note:", error);
      Swal.fire("Error", "An error occurred while unarchiving the note", "error");
    }
  };

  const handlerNoteSelectedForm = (note) => {
    setVisibleForm(true);
    setNoteSelected({ ...note });
  };

  const handlerOpenForm = () => {
    setVisibleForm(true);
  };

  const handlerCloseForm = () => {
    setVisibleForm(false);
    setNoteSelected(initialNoteForm);
  };

  return {
    notes,
    noteSelected,
    initialNoteForm,
    visibleForm,
    handlerAddNote,
    handlerRemoveNote,
    handlerArchiveNote,
    handlerUnarchiveNote,
    handlerNoteSelectedForm,
    handlerOpenForm,
    handlerCloseForm,
    getNotesActive,
    getNotesArchive
  };
};
