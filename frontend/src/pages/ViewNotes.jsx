import PropTypes from "prop-types";
import { NoteCard } from "../components/NoteCard";
import { useContext, useEffect } from "react";
import { NoteContext } from "../context/NoteContext";
import { NoteModalForm } from "../components/NoteModalForm";

export const ViewNotes = ({ actives }) => {
  const { notes, visibleForm, handlerOpenForm, getNotesActive, getNotesArchive } = useContext(NoteContext);

  useEffect(() => {
    if (actives) {
      getNotesActive();
    } else {
      getNotesArchive();
    }
  }, [actives]);

  return (
    <>
      {!visibleForm || <NoteModalForm />}
      <div className="mx-4 mt-3 p-1">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Notes Home</a>
            </li>
            <li className="breadcrumb-item active text-lg" aria-current="page">
              {actives ? "Your notes activated" : "Your archived notes"}
            </li>
          </ol>
        </nav>
      </div>

      <div className="row justify-content-start ps-5 my-4 w-100">
        {notes.length === 0 ? <h1>No notes</h1> : notes.map((note) => <NoteCard key={note.id} note={note} />)}
      </div>
    </>
  );
};

ViewNotes.propTypes = {
  actives: PropTypes.bool,
};
