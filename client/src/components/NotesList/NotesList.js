import { useContext, useState } from "react";
import { NotesContext } from "../../contexts/notesContext";
import NoteRow from "../NoteRow";
import ColorSelector from "../ColorSelector";

const NotesList = () => {
  const { notes } = useContext(NotesContext);
  const [color, setColor] = useState("");

  return (
    <>
      <ColorSelector setColor={setColor}/>
      <ul>
        {notes.map((note) => (
          <NoteRow note={note} borderColor={color}/>
        ))}
      </ul>
    </>
  );
};

export default NotesList;
