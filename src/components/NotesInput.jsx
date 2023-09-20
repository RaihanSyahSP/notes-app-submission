
const NotesInput = () => {
  return (
    <div className="">
      <div className="form-control w-full max-w-xs mx-auto">
        <label className="label" htmlFor="title">
          <span className="label-text text-3xl">Title</span>
        </label>
        <input type="text" placeholder="Type here" id="title" className="input input-bordered input-secondary w-full max-w-xs" />
      </div>
    </div>
  );
}

export default NotesInput