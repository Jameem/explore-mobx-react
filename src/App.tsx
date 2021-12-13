import React from 'react';
import logo from './logo.svg';
import './App.css';
import NotesList from './components/NotesList';
import NotesAdd from './components/NotesAdd';

function App() {
  return (
    <div className="App">
      <NotesAdd/>
      <NotesList/>
    </div>
  );
}

export default App;
