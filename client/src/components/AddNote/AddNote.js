import { useContext, useState } from "react";
import { NotesContext } from "../../contexts/notesContext";

const AddNote = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState();
  const { addNote } = useContext(NotesContext);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const add = () => {
    if (text === "") {
      setError("Please add a note");
      return;
    }
    setError("");
    addNote(text);
    setText("");
  };

  return (
    <>
      <h2>Add new note</h2>
      <input type="text" value={text} onChange={handleTextChange} />
      <button onClick={add}>Add note</button>
      {error && <span>{error}</span>}
    </>
  );
};

export default AddNote;
