import { useState } from "react"


const NotesInput = ({addNotes}) => {    
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const onTitleChangeHandler = (e) => {
        setTitle(e.target.value)
    }

    const onBodyChangeHandler = (e) => {
        setBody(e.target.value)
    }

    const onFormSubmitHandler = (e) => {
        e.preventDefault()
        addNotes({
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false
        })
        setTitle("")
        setBody("")
    }
    

  return (
      <div className="flex border border-red-300 max-w-screen mx-auto gap-8 px-5 items-center justify-between h-screen xl:px-24">
        <div className="hidden w-[45opx] px-10 md:block">
            <img src="../public/write.svg" width="450px"></img>  
        </div>
       <aside className="flex flex-col font-semibold w-full mx-auto items-center lg:w-[450px] ">
            <h1 className="text-2xl lg:text-4xl">Add Note</h1>
            <form className="form-control w-full max-w-lg" onSubmit={onFormSubmitHandler}>
                <label className="label" htmlFor="title">
                    <span className="label-text text-xl lg:text-2xl">Title</span>
                </label>
                <input 
                    type="text" 
                    placeholder="Type here" 
                    id="title" 
                    value={title}
                    onChange={onTitleChangeHandler}
                    className="input input-bordered input-secondary w-full max-w-lg" 
                    required
                />
                  <label className="label" htmlFor="notes">
                    <span className="label-text text-xl lg:text-2xl">Note</span>
                </label>
                <textarea 
                    className="textarea textarea-bordered textarea-secondary h-24" 
                    id="notes" 
                    placeholder="Type notes here"
                    value={body}
                    onChange={onBodyChangeHandler}  
                    required
                >             
                </textarea>
                <button className="btn btn-secondary mt-5" type="submit">Add</button>
            </form>
        </aside>  
    </div>
  );
}

export default NotesInput