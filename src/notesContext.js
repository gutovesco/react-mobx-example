import React from 'react'
import { createNotesStore } from './notesStore'
import { useLocalStore } from 'mobx-react'

const notesContext = React.createContext(null)

export const NotesProvider = ({children}) => {
    const notesStore = useLocalStore(createNotesStore)
    
    return <notesContext.Provider value={notesStore}>
        {children}
    </notesContext.Provider>
}

export const useNotesStore = () => React.useContext(notesContext)