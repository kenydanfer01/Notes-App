import { useContext } from "react";
import { Link } from "react-router-dom";
import { NoteContext } from "../../context/NoteContext";

export const Navbar = () => {
  const { handlerOpenForm } = useContext(NoteContext);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body p-3" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="decoration-none" style={{ textDecoration: "none" }} to="/">
            <a className="navbar-brand" href="#">
              Home My Notes
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <button type="button" className="btn btn-outline-primary btn-sm" onClick={handlerOpenForm}>
                    Create Note
                  </button>
                </a>
              </li>
              <li className="nav-item">
                <Link to="/archived">
                  <a className="nav-link active" aria-current="page" href="#">
                    <button type="button" className="btn btn-outline-secondary btn-sm">
                      Archived Notes
                    </button>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
