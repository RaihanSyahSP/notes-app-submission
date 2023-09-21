import React from 'react'
import { showFormattedDate } from '../utils/data';


const NotesItem = ({ id, title, body, createdAt, archivedHandler, archived, deleteHandler }) => {
	return (
    <div className="card w-full shadow-2xl mt-10 bg-base-100 border hover:border-secondary hover:cursor-pointer" key={id}>
      <div className="card-body p-5">
        <h2 className="card-title">{title}</h2>
        <p>{showFormattedDate(createdAt)}</p>
        <p>{body}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-error" onClick={() => document.getElementById(id).showModal()}>
            Delete
          </button>
          <dialog id={id} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Warning</h3>
							<p className="py-4">Are you sure want to delete <span className='text-lg font-bold'>{ title }</span> note?</p>
              <div className="modal-action">
                <form method="dialog">
                  <div className="flex gap-2">
                    <button className="btn btn-error" onClick={() => deleteHandler(id)}>
                      Delete
                    </button>
                    <button className="btn">Close</button>
                  </div>
                </form>
              </div>
            </div>
          </dialog>
					<button className="btn btn-warning" onClick={() => archivedHandler(id)}>
						{archived ? "Unarchive" : "Archive"}
					</button>
        </div>
      </div>
    </div>
  );
}

export default NotesItem