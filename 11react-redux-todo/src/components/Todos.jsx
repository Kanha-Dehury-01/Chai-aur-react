import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleCompleted } from "../feature/todo/todoSlice";
import { useState } from "react";


function Todos() {
  
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const dispatch = useDispatch();

  

  return (
    <div>
      <h1 className="text-2xl text-white text-center mt-5">Todos</h1>
      <div className="flex justify-center ">
        <ul className="list-none bg-gray-50 w-1/2 rounded-lg ">
          {todos.map((todo) => (
            <li
            key={todo.id}
            className="flex border-solid border-2 m-1 rounded-lg border-gray-500"
            >
              <input type="checkbox" className="m-1" checked={(todo.todoCompleted)} onChange={()=>dispatch(toggleCompleted(todo.id))} />
              <input
                type="text"
                className="px-3 py-1 outline-none rounded-lg w-full"
                value={todo.todoMsg}
                readOnly
              />
              
              {console.log(todo)}
              
              <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-400 shrink-0 "
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todos;
