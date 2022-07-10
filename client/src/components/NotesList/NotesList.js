import { useContext, useState } from "react";
import { NotesContext } from "../../contexts/notesContext";
import NoteRow from "../NoteRow";
import ColorSelector from "../ColorSelector";
import styles from "./styles.module.scss";

const NotesList = () => {
  const { isLoading, notes } = useContext(NotesContext);
  const [color, setColor] = useState("");

  if (isLoading) {
    return <span>Loading....</span>;
  }

  if (notes.length === 0) {
    return (
      <div className={styles.noNotes}>
        <b>The are not notes, let's create the first one!</b>
      </div>
    );
  }

  return (
    <div>
      <h2>My notes</h2>
      <ColorSelector setColor={setColor} />
      <ul className={styles.notesList}>
        {notes.map((note) => (
          <NoteRow key={note.id} note={note} borderColor={color} />
        ))}
      </ul>
    </div>
  );
};

export default NotesList;
