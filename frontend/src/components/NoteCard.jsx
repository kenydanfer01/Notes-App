import PropTypes from "prop-types";
import { useContext } from "react";
import { NoteContext } from "../context/NoteContext";

export const NoteCard = ({ note }) => {
  const { id, title, content, active } = note;
  const { handlerNoteSelectedForm, handlerRemoveNote, handlerArchiveNote, handlerUnarchiveNote } = useContext(NoteContext);

  return (
    <>
      <div className="card col-lg-5 col-md-4 col-10 m-3">
        <div className="card-body px-0">
          <div className="row">
            <div className="col-2">
              <i className="fa-solid fa-note-sticky fa-4x"></i>
            </div>
            <div className="col-5 px-0">
              <h4>
                <p>{title}</p>
              </h4>
            </div>
            <div className="col-5 align-self-end">
              {active ? (
                <button type="button" className="btn btn-outline-secondary border-0 p-2" onClick={() => handlerArchiveNote(id)}>
                  <i className="fa-solid fa-box-archive fa-2x"></i>
                </button>
              ) : (
                <button type="button" className="btn btn-outline-primary border-0 p-2" onClick={() => handlerUnarchiveNote(id)}>
                  <i className="fa-solid fa-upload fa-2x"></i>
                </button>
              )}
              <button
                type="button"
                className="btn btn-outline-warning border-0 p-2"
                onClick={() =>
                  handlerNoteSelectedForm({
                    id,
                    title,
                    content,
                    active,
                  })
                }
              >
                <i className="fa-solid fa-pen fa-2x"></i>
              </button>
              <button type="button" className="btn btn-outline-danger border-0 p-2" onClick={() => handlerRemoveNote(id)}>
                <i className="fa-solid fa-trash-can fa-2x"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

NoteCard.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
  }).isRequired,
};
