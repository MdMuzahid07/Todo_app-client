import Todo from "./pages/Todo";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateModal from "./components/UpdateModal";
import { useState } from "react";

function App() {

  const [idForUpdate, setIdForUpdate] = useState();

  const handleUpdate = (id) => {
    setIdForUpdate(id)
  }

  return (
    <div>
      <div className="max-w-xl mx-auto custom-height md:my-7 border drop-shadow md:rounded-xl bg-white  y-scroll">
        <Todo handleUpdate={handleUpdate} />
      </div>
      <ToastContainer />
      <UpdateModal idForUpdate={idForUpdate} />
    </div>
  );
}

export default App;
