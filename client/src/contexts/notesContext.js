import React, { createContext, useEffect, useState } from "react";
import Notes from "../server/notes";

const NotesContext = createContext(undefined);

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAll = async () => {
    setIsLoading(true);
    const {
      data: { data },
    } = await Notes.getAll();
    setIsLoading(false);
    setNotes(data);
  };

  const addNote = async (data) => {
    setIsLoading(true);
    await Notes.create(data);
    await getAll();
    setIsLoading(false);
  };

  const deleteNote = async (id) => {
    setIsLoading(true);
    await Notes.delete(id);
    await getAll();
    setIsLoading(false);
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <NotesContext.Provider
      value={{
        isLoading,
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
