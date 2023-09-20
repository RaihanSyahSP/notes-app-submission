import Navbar from "./Navbar"
import NotesInput from "./NotesInput"


const NotesApp = () => {
  return (
    <div className="mx-auto h-screen">
        <Navbar />
        <NotesInput />
    </div>
  )
}

export default NotesApp