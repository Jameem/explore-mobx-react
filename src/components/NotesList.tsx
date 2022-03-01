import { observer } from "mobx-react-lite";
import React from "react";
import noteStore from "../NoteStore";

interface NotesProps {}

//STEP4: This is to test merging

const NotesList: React.FC<NotesProps> = (props) => {
  return (
    <div>
      <h3>List</h3>

      {noteStore.notes.map((note, index) => {
        return (
          <>
            <h5>
              {index + 1}. {note}{" "}
              <small
                style={{ cursor: "pointer" }}
                onClick={() => noteStore.removeNote(note)}
              >
                Remove
              </small>
            </h5>
          </>
        );
      })}
    </div>
  );
};

export default observer(NotesList);

// testing cherry pick
