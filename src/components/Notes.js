import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Notes = (props)  => {    

    return (
        <div>
          {props.notes && props.notes.map((key, index) => 

          <div className="container" style={containerStyle} key={index}>
            <div style = {noteStyle} className="input-group mb-3">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <input type="checkbox" aria-label="Checkbox for following text input"/>
                </div>
              </div>
              <input type="text" className="form-control" aria-label="Text input with checkbox" 
                     readOnly value={key}/>
            </div>
            <button id="delete"
                    type="button"
                    className="btn btn-danger"
                    onClick={props.delete.bind(this, key)}
                    style={btnStyle}>X</button>
          </div>
          )}

        </div>
    );
  }

  const noteStyle = {
    marginTop: 20,
    width: '100%', 
    right: 15
  }

  const containerStyle = {
      display: 'flex',
      position: 'relative',
      flexDirection: 'column'
  }

  const btnStyle = {
    width: 40,
    height: 40,
    borderRadius: 35,
    textAlign: 'center',
    position: 'absolute',
    right: 0,
    top: 18
  }
  
  export default Notes;