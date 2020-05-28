import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { toggleImportanceOF } from "../reducers/noteReducer";

const Note = ({ note, handleClick }) => {
    return (
        <li onClick={handleClick}>
            {note.content}
            <strong>{note.important ? 'important' : ''}</strong>
        </li>
    )
}

const Notes = () => {
    const dispatch = useDispatch()
    const notes = useSelector(state => state)

    return (
        <ul>
            {notes.map(note =>
            <Note key={note.id} note={note} handleClick={() => dispatch(toggleImportanceOF(note.id))}/>)}
        </ul>
    )
}

export default Notes
