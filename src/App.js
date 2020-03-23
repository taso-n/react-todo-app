import React , {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header'
import Notes from './components/Notes';

function App() {
  
  const [note, setNote] = useState('')
  const [notesList, setNotesList] = useState([])
  
  const handleClick = (e) => {
    e.preventDefault()
    //console.log({note});
    setNotesList(notesList => [...notesList, note])
  }

  const handleChange = (e) => {
    setNote(e.target.value)
  }

  const handleDelete = (itemToDelete) =>{
    const id = notesList.indexOf(itemToDelete)
    setNotesList(notesList => notesList.filter((key, index) => index !== id))
  }

  return (
    <div className="App">
      <Header/> 
      <div className="input">
        <input
            id="note"
            type="text"
            className="form-control"
            value={note}
            placeholder="Add new note"
            onChange={handleChange}/>
        <button
            id="add"
            type="button" 
            className="add-new-note btn btn-warning" 
            onClick={handleClick}>+</button>
      </div>     
      <Notes notes={notesList} delete={handleDelete}/>
    </div>
  );
}

export default App;

