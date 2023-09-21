import { useEffect, useState } from "react"
import Navbar from "./Navbar"
import NotesInput from "./NotesInput"
import { getInitialData } from "../utils/data"
import NotesContainer from "./NotesContainer"

const NotesApp = () => {
    const [initialNotes, setInitialNotes] = useState(getInitialData());
    const [notes, setNotes] = useState(initialNotes)

    const onAddNotesHandler = ({title, body, createdAt, archived}) => {
      const newNote = {
        id: +new Date(),
        title,
        body,
        createdAt,
        archived,
      };

      setNotes((prevState) => [...prevState, newNote]);
      setInitialNotes((prevInitialNotes) => [...prevInitialNotes, newNote]);
    }

    const onDeleteNoteHandler = (id) => {
      setNotes(prevState => {
          return prevState.filter(note => note.id !== id)
      })

      setInitialNotes(prevState => {
          return prevState.filter(note => note.id !== id)
      })
    }

    const onArchivedNoteHandler = (id) => {
      setNotes(prevState => {
        return prevState.map(note => {
            if(note.id === id) {
                return {
                  ...note,
                  archived: !note.archived
                }
            }
            return note
        })
      })

      setInitialNotes(prevState => {
        return prevState.map(note => {
            if(note.id === id) {
                return {
                  ...note,
                  archived: !note.archived
                }
            }
            return note
        })
      })
    }

    const onSearchHandler = (search) => {
      if (search === "") return setNotes(initialNotes);
      setNotes((prevState) => {
        return prevState.filter((note) => note.title.toLowerCase().includes(search.toLowerCase()));
      });
    };


    useEffect(() => {
      console.log(notes)
      console.log(initialNotes)
    }, [notes, initialNotes])

  return (
    <div className="mx-auto h-screen">
      <Navbar onSearch={(search) => onSearchHandler(search)} />
      <NotesInput addNotes={onAddNotesHandler} />
      <NotesContainer
        notes={notes}
        deleteHandler={onDeleteNoteHandler}
        archivedHandler={onArchivedNoteHandler}
      />
    </div>
  )
}

export default NotesApp