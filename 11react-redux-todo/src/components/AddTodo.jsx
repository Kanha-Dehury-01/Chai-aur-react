import { useState } from "react"
import {useDispatch} from 'react-redux'
import { addTodo } from "../feature/todo/todoSlice"


function AddTodo() {
const [todoMsg,setTodoMsg] = useState('')
const completed = false
const dispatch = useDispatch()

const add = (e) => {
    e.preventDefault()
    dispatch(addTodo({todoMsg,completed}))
    setTodoMsg('')
}
    
    return (
    <form onSubmit={add} className="flex justify-center mt-10">
      <div className="flex w-1/2 ">
        <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
      </div>
    </form>
  )
}

export default AddTodo