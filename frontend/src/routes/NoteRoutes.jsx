import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";
import { NoteProvider } from "../context/NoteProvider";

import { ViewNotes } from "../pages/ViewNotes";

export const NoteRoutes = () => {
  return (
    <>
      <NoteProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ViewNotes actives={true} />} />
          <Route path="/archived" element={<ViewNotes actives={false} />} />
        </Routes>
      </NoteProvider>
    </>
  );
};
