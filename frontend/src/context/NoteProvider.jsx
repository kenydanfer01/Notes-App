import { useNotes } from "../hooks/useNotes";
import { NoteContext } from "./NoteContext";

export const NoteProvider = ({ children }) => {
  const {
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
    getNotesArchive,
  } = useNotes();

  return (
    <NoteContext.Provider
      value={{
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
        getNotesArchive,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};
