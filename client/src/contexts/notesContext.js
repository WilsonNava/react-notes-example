import React, { createContext, useEffect, useState } from "react";
import Notes from "../services/notes";

const NotesContext = createContext(undefined);

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getAll = async () => {
    setError("");
    setIsLoading(true);
    try {
      const {
        data: { data },
      } = await Notes.getAll();

      setNotes(data);
    } catch (e) {
      setError("Error getting notes");
    } finally {
      setIsLoading(false);
    }
  };

  const addNote = async (text) => {
    setError("");
    setIsLoading(true);
    try {
      await Notes.create(text);
      await getAll();
    } catch (e) {
      setError("Error adding note");
    } finally {
      setIsLoading(false);
    }
  };

  const deleteNote = async (id) => {
    setError("");
    setIsLoading(true);
    try {
      await Notes.delete(id);
      await getAll();
    } catch (e) {
      setError("Error deleting note");
    } finally {
      setIsLoading(false);
    }
  };

  const updateNote = async (data) => {
    setError("");
    setIsLoading(true);
    try {
      await Notes.update(data);
      await getAll();
    } catch (e) {
      setError("Error updating note");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <NotesContext.Provider
      value={{
        isLoading,
        error,
        notes,
        addNote,
        updateNote,
        deleteNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export { NotesProvider, NotesContext };
