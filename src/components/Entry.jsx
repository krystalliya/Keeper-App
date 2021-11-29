import React from "react";
import notes from "../notes";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

function Entry() {
  return (
    <div>
      {notes.map((note) => (
        <Note key={note.key} title={note.title} content={note.content} />
      ))}
    </div>
  );
}

export default Entry;
