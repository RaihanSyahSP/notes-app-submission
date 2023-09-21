import React from 'react'
import NotesList from './NotesList';
import Message from './Message';

const NotesContainer = ({ notes, deleteHandler, archivedHandler }) => {
  // Filter catatan yang memiliki archived === true
  const archivedNotes = notes.filter((note) => note.archived);
  
  // Filter catatan yang memiliki archived === false
  const unarchivedNotes = notes.filter((note) => !note.archived);
  return (
    <div className="grid grid-cols-2 gap-6 h-[100vh] px-10">
      <div className="col-span-1">
        {unarchivedNotes.length > 0 ? (
          <NotesList notes={unarchivedNotes} deleteHandler={deleteHandler} archivedHandler={archivedHandler} />
        ) : (
          <Message title="There is no one note"/>
        )}
      </div>
      <div className="col-span-1">
        {archivedNotes.length > 0 ? (
          <NotesList notes={archivedNotes} deleteHandler={deleteHandler} archivedHandler={archivedHandler} />
        ) : (
          <Message title="There is no archived notes" />
        )}
      </div>
    </div>
  );
}

export default NotesContainer