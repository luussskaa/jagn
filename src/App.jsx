import "./App.css";
import AddNote from "./AddNote";
import ListNote from "./ListNote";

import { loadNotes } from "./functions";

export default function App() {
  const load = loadNotes();
  console.log(load)
  return (
    <>
      <AddNote />
      {load !== null && load.map(e =>
        <ListNote title={e.title} key={e.id} id={e.id} />)}
    </>
  )
}