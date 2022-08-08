import Todo from "./pages/Todo";

function App() {
  return (
    <div className="px-3 md:px-0">
      <div className="max-w-xl mx-auto custom-height my-7 border drop-shadow rounded-xl bg-white  y-scroll">
        <Todo />
      </div>
    </div>
  );
}

export default App;
