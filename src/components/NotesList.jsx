import React from 'react'
import NotesItem from './NotesItem'

const NotesList = ({ notes, deleteHandler }) => {
    return (
        <div className='grid grid-cols-2 gap-6'>
            {notes.map(note => (
                <NotesItem
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    body={note.body}
                    createdAt={note.createdAt}
                    archived={note.archived}
                    deleteHandler={deleteHandler}
                />
            ))}                            
        </div>
  )
}

export default NotesList