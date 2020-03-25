import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Notes from "./components/Notes";

function App() {
  const [note, setNote] = useState("");
  const [notesList, setNotesList] = useState([]);

  const handleClick = e => {
    e.preventDefault();
    if (note !== "") {
      setNotesList(notesList => [...notesList, note]);
    }
    setNote("");
  };

  const handleChange = e => {
    setNote(e.target.value);
  };

  const handleDelete = itemToDelete => {
    const id = notesList.indexOf(itemToDelete);
    setNotesList(notesList => notesList.filter((key, index) => index !== id));
  };
  const handleKeyPress = e => {
    if (e.key === "Enter") {
      handleClick(e);
    }
  };

  return (
    <div className="App">
      <Header />
      <form className="input">
        <input
          id="note"
          type="text"
          className="form-control"
          value={note}
          placeholder="Add new note"
          onKeyPress={handleKeyPress}
          onChange={handleChange}
        />
        <button
          id="add"
          type="button"
          className="add-new-note btn btn-warning"
          onClick={handleClick}
        >
          +
        </button>
      </form>
      <Notes notes={notesList} delete={handleDelete} />
    </div>
  );
}

export default App;
