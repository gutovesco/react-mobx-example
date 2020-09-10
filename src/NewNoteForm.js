import React, { useState } from 'react'
import { useNotesStore } from './notesContext'

export default function NewNoteForm() {
    const [noteText, setNoteText] = useState("")
    const notesStore = useNotesStore()

    return (
        <div>
            <input value={noteText} onChange={(e) => setNoteText(e.target.value)} type="text"></input>
            <button onClick={() => notesStore.addNote(noteText)}>Add note</button>
        </div>
    )
}
