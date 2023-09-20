import { useEffect, useState } from "react"
import Navbar from "./Navbar"
import NotesInput from "./NotesInput"
import { getInitialData } from "../utils/data"

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

    useEffect(() => {
        console.log(notes)
    }, [notes])

  return (
    <div className="mx-auto h-screen">
        <Navbar />
        <NotesInput addNotes={onAddNotesHandler}/>
    </div>
  )
}

export default NotesApp