import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { NoteContext } from "../context/NoteContext";

export const NoteModalForm = () => {
  const { noteSelected, handlerCloseForm, handlerAddNote } = useContext(NoteContext);
  const [noteForm, setNoteForm] = useState(noteSelected);

  const { id, title, content, isActive } = noteForm;

  useEffect(() => {
    setNoteForm({ ...noteSelected });
  }, [noteSelected]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setNoteForm({
      ...noteForm,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!title || !content) {
      Swal.fire("Error de validacion", "Debe completar los campos del formulario!", "error");
      return;
    }

    handlerAddNote(noteForm);
    setNoteForm(noteSelected);
  };

  const onCloseForm = () => {
    handlerCloseForm();
    setNoteForm(noteSelected);
  };

  return (
    <div className="modal" style={{ display: "block" }} tabIndex="-1">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{id > 0 ? "EDIT " : "CREATE NEW "} NOTE</h5>
            <button type="button" className="btn-close" onClick={onCloseForm}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={onSubmit}>
              <label htmlFor="title">
                <b>Title: </b>
              </label>
              <input className="form-control my-3 w-100" placeholder="Title" name="title" value={title} onChange={onInputChange} />
              <label htmlFor="title">
                <b>Content: </b>
              </label>
              <textarea className="form-control my-3 w-100" placeholder="Content" name="content" value={content} onChange={onInputChange} />

              <input type="hidden" name="id" value={id} />
              <input type="hidden" name="isActive" value={isActive} />

              <div className="d-flex align-items-end justify-content-end">
              <button className="btn btn-success" type="submit">
                {id > 0 ? "Update" : "Save"}
              </button>

              {!handlerCloseForm || (
                <button className="btn btn-danger mx-2" type="button" onClick={onCloseForm}>
                  Close
                </button>
              )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
