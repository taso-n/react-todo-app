import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Checkbox } from 'react-bootstrap';

const Notes = (props)  => {    

    return (
        <div className="container" /*style={containerStyle}*/>
          {props.notes && props.notes.map((key, index) => 
          <>
            <p /*style={noteStyle}*/>{key}</p>
            <button id="delete" type="button"
             className="btn btn-danger"
              onClick={props.delete.bind(this, key)} /*style={btnStyle}*/>X</button>
          </>
          )}
        </div>
    );
  }


  
  export default Notes;