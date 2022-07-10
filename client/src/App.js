import NotesList from "./components/NotesList";
import AddNote from "./components/AddNote";
import { NotesProvider } from "./contexts/notesContext";
import Grid from "./components/Grid";
import styles from "./styles.module.scss";
import Error from "./components/Error";

const App = () => {
  return (
    <>
      <div className={styles.app}>
        <h1>Notes app</h1>
        <NotesProvider>
          <AddNote />
          <NotesList />
          <Error />
        </NotesProvider>
      </div>
      <Grid />
    </>
  );
};

export default App;
