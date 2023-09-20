
const Navbar = () => {
    const inputSearchChangeHandler = (e) => {
        console.log(e.target.value);
    }

    return (
      <nav>  
        <div className="navbar bg-secondary w-full">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" onChange={inputSearchChangeHandler}/>
                </div>
            </div>
        </div>
      </nav>
  );
}

export default Navbar