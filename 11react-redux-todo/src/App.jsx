import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {

  return (
    <>
      <h1 className="text-3xl m-4 text-center text-white bg-slate-800 border-solid border-blue-400 font-bold border-2 rounded-lg p-5  shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
        Todo with React-Redux
      </h1>
      <AddTodo/>
      <Todos/>
    </>
  );
}

export default App;
