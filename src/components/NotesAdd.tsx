import React from "react";
import { observer } from "mobx-react-lite";

import noteStore from "../NoteStore";

interface NotesProps{

}

const NotesAdd: React.FC<NotesProps> = (props)=>{

    return <div>
        <h1>Notes App</h1>
        <input type="text" value={noteStore.newNote} onChange={(e)=>(noteStore.newNote=e.target.value)}></input>
        <button onClick={()=> noteStore.newNote && noteStore.addNote()}>Add</button>
    </div>
}

export default observer(NotesAdd)