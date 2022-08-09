import UpdateModal from "./components/UpdateModal";
import Todo from "./pages/Todo";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="px-3 md:px-0">
      <div className="max-w-xl mx-auto custom-height my-7 border drop-shadow rounded-xl bg-white  y-scroll">
        <Todo />
      </div>
      <ToastContainer />
      <UpdateModal />
    </div>

  );
}

export default App;
