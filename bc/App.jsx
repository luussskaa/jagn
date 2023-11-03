import "./App.css";
import AddNote from "./AddNote";
import NewNote from "./NewNote";
import ListNote from "./ListNote";
import { useState } from "react";
import ViewNote from "./ViewNote";

export default function App() {
  let check = JSON.parse(localStorage.getItem('notes'));
  const [newNote, setNewNote] = useState(false);
  const addNewNote = () => {
    setNewNote(!newNote);
  }
  const [editNote, setEditNote] = useState(false);
  const enableEdit = () => {
    setEditNote(!editNote);
  }
  const [viewNote, setViewNote] = useState(false);
  const enableView = () => {
    setViewNote(!viewNote);
  }
  return (
    <>
      {!editNote && !viewNote ?
        <>
          {!newNote &&
            <AddNote addNewNote={addNewNote} />
          }
          {newNote &&
            <NewNote addNewNote={addNewNote} />
          }
        </> : null}
      {check !== null && !newNote ? check.map(e => <ListNote content={e} key={e} enableEdit={enableEdit} editNote={editNote} enableView={enableView} viewNote={viewNote} />) : null}
    </>
  )
}