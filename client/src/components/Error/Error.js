import { useContext } from "react";
import { NotesContext } from "../../contexts/notesContext";
import styles from "./styles.module.scss";

const Error = () => {
  const { error } = useContext(NotesContext);

  if (error !== "") {
    return <h2 className={styles.error}>{error}</h2>;
  }
};

export default Error;
