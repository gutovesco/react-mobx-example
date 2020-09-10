import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewNoteForm from './NewNoteForm';
import { useNotesStore } from './notesContext';
import { useObserver } from 'mobx-react';

function App() {
  const notesStore = useNotesStore()
  return useObserver(() => (
    <>
    <ul>
      {notesStore.notes.map(note => (
        <li key={note.id}>{note.text}</li>
      ))}
    </ul>
    <NewNoteForm/>N
    </>
  ));
}

export default App;
