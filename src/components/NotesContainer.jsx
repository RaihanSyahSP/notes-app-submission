import React from 'react'
import { showFormattedDate } from '../utils/data';
import NotesList from './NotesList';

const NotesContainer = ({ notes, deleteHandler }) => {
  return (
    <div className="grid grid-cols-2 h-[100vh] px-10">
          <NotesList notes={notes} deleteHandler={deleteHandler} />
    </div>
  );
}

export default NotesContainer