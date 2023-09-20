import { useEffect, useState } from "react"
import Navbar from "./Navbar"
import NotesInput from "./NotesInput"
import { getInitialData } from "../utils/data"
import NotesContainer from "./NotesContainer"

const NotesApp = () => {
    
    const [notes, setNotes] = useState(getInitialData())

    const onAddNotesHandler = ({title, body, createdAt, archived}) => {
        setNotes(prevState => {
            return [...prevState, {
                id: +new Date(),
                title,
                body,
                createdAt,
                archived
            }]
        })
    }

    const onDeleteNoteHandler = (id) => {
        console.log(id)
        setNotes(prevState => {
            return prevState.filter(note => note.id !== id)
        })
    }

    useEffect(() => {
        console.log(notes)
    }, [notes])

  return (
    <div className="mx-auto h-screen">
        <Navbar />
        <NotesInput addNotes={onAddNotesHandler} />
        <NotesContainer notes={notes} deleteHandler={onDeleteNoteHandler} />
    </div>
  )
}

export default NotesApp