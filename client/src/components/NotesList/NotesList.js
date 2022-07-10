import { useContext } from "react";
import { NotesContext } from "../../contexts/notesContext";
import NoteRow from "../NoteRow";

const NotesList = () => {
  const { notes } = useContext(NotesContext);

  return (
    <ul>
      {notes.map((note) => (
        <NoteRow note={note} />
      ))}
    </ul>
  );
};

export default NotesList;
