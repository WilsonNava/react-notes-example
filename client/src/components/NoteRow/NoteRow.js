import { useContext } from "react";
import { NotesContext } from "../../contexts/notesContext";
import styles from "./styles.module.scss";

const NoteRow = ({ note: { text, id }, borderColor }) => {
  const { deleteNote } = useContext(NotesContext);

  const handleDelete = () => {
    deleteNote(id);
  };

  return (
    <li key={id} className={styles.noteRow} style={{
      borderColor
    }}>
      <span>{text}</span>
      <button onClick={handleDelete}>delete</button>
    </li>
  );
};

export default NoteRow;
