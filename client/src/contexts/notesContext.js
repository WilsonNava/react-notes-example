import React, { createContext, useContext, useEffect, useState } from "react";
import Notes from "../server/notes";

const NotesContext = createContext(undefined);

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const getAll = async () => {
    const {
      data: { data },
    } = await Notes.getAll();
    setNotes(data);
  };

  const addNote = async (data) => {
    await Notes.create(data);
    await getAll();
  };

  const deleteNote = async (id) => {
    await Notes.delete(id);
    await getAll();
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <NotesContext.Provider
      value={{
        notes,
        addNote,
        deleteNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export { NotesProvider, NotesContext };
