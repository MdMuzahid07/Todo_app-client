import Todo from "./pages/Todo";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateModal from "./components/UpdateModal";

function App() {

  const handleUpdate = (id) => {
    // e.preventDefault();


    alert(id)
  }

  return (
    <div className="px-3 md:px-0">
      <div className="max-w-xl mx-auto custom-height my-7 border drop-shadow rounded-xl bg-white  y-scroll">
        <Todo handleUpdate={handleUpdate} />
      </div>
      <ToastContainer />
      <UpdateModal />
    </div>
  );
}

export default App;
