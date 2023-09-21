import React from 'react'
import NotesList from './NotesList';
import Message from './Message';

const NotesContainer = ({ notes, deleteHandler, archivedHandler }) => {
  const archivedNotes = notes.filter((note) => note.archived);
  const unarchivedNotes = notes.filter((note) => !note.archived);
  
  return (
    <div className="grid grid-cols-2 gap-6 h-[100vh] mt-5 px-10">
      <div className="col-span-1">
        <h2 className='text-5xl font-bold text-center'>Notes</h2>
        {unarchivedNotes.length > 0 ? (
          <NotesList notes={unarchivedNotes} deleteHandler={deleteHandler} archivedHandler={archivedHandler} />
        ) : (
          <Message title="There is no one note"/>
        )}
      </div>
      <div className="col-span-1">
        <h2 className='text-5xl font-bold text-center'>Archived Notes</h2>
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