import React from 'react'
import { showFormattedDate } from '../utils/data';


const NotesItem = ({ id, title, body, createdAt, archived, deleteHandler }) => {
  return (
    <div className="card w-full bg-base-100 border border-secondary shadow-2xl mt-10" key={id}>
      <div className="card-body p-5">
        <h2 className="card-title">{title}</h2>
        <p>{showFormattedDate(createdAt)}</p>
        <p>{body}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-error" onClick={() => document.getElementById("my_modal_5").showModal()}>
            Delete
          </button>
          <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Warning</h3>
              <p className="py-4">Are you sure to delete this note?</p>
              <div className="modal-action">
                <form method="dialog">
									<div className='flex gap-2'>
										<button className="btn btn-error" onClick={() => deleteHandler(id)}>Delete</button>
										<button className="btn">Close</button>
									</div>
                </form>
              </div>
            </div>
          </dialog>
          <button className="btn btn-warning">Archive</button>
        </div>
      </div>
    </div>
  );
}

export default NotesItem