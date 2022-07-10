import { useContext } from "react";
import { NotesContext } from "../../contexts/notesContext";

const NoteRow = ({ note: { text, id } }) => {
  const { deleteNote } = useContext(NotesContext);

  const handleDelete = () => {
    deleteNote(id);
  };

  return (
    <li key={id}>
      <span>{text}</span>
      <button onClick={handleDelete}>delete</button>
    </li>
  );
};

export default NoteRow;
