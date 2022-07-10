import { useContext, useState } from "react";
import { NotesContext } from "../../contexts/notesContext";
import NoteRow from "../NoteRow";
import ColorSelector from "../ColorSelector";
import styles from "./styles.module.scss";

const NotesList = () => {
  const { isLoading, notes } = useContext(NotesContext);
  const [color, setColor] = useState("");


  if(isLoading) {
      return <span>Loading....</span>
  }
  return (
    <div >
      <ColorSelector setColor={setColor} />
      <ul className={styles.notesList}>
        {notes.map((note) => (
          <NoteRow key={note.id} note={note} borderColor={color} />
        ))}

        {notes.length === 0 && (
          <span>The are not notes, let's create the first one!</span>
        )}
      </ul>
    </div>
  );
};

export default NotesList;
