import NotesList from "./components/NotesList";
import AddNote from "./components/AddNote";
import { NotesProvider } from "./contexts/notesContext";
import Grid from "./components/Grid";

const App = () => {
  return (
    <div className="App">
      <h1>Notes app</h1>
      <NotesProvider>
        <AddNote />
        <NotesList />
      </NotesProvider>

      <Grid />
    </div>
  );
};

export default App;
