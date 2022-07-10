import { useContext, useState } from "react";
import { NotesContext } from "../../contexts/notesContext";
import styles from "./styles.module.scss";

const NoteRow = ({ note: { text, id }, borderColor }) => {
  const { deleteNote, updateNote } = useContext(NotesContext);
  const [value, setValue] = useState(text);
  const [editMode, setEditMode] = useState(false);

  const handleDelete = () => {
    deleteNote(id);
  };

  const handleUpdate = () => {
    updateNote({ id, text: value });
  };

  const handleChangeEditMode = () => {
    setEditMode(!editMode);
  };

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <li
      key={id}
      className={styles.noteRow}
      style={{
        borderColor,
      }}
    >
      {editMode ? (
        <>
          <input type={text} value={value} onChange={handleOnChange} />
          <button onClick={handleUpdate}>confirm</button>
        </>
      ) : (
        <>
          <span>{text}</span>
          <button onClick={handleDelete}>delete</button>
        </>
      )}

      <button onClick={handleChangeEditMode}>
        {editMode ? "Cancel" : "Edit"}{" "}
      </button>
    </li>
  );
};

export default NoteRow;
