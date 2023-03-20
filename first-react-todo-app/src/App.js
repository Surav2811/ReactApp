import React, { useState,useRef } from "react"
import TodoList from "./TodoList";
import uuid from 'uuid'

function App() {
  const [todos, setTodos]= useState([])
  const todoNameRef= useRef()

  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos =>{
      return [...prevTodos, { id:uuid.v4(), name: name, complete:false}]
    })
    todoNameRef.current.value = null
  }

  return (
    <>
      <TodoList todos={todos}/>
      <input ref={todoNameRef} type="text"/>
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear Completed Todo</button>
      <div> 0 Left to do</div>
    </>
  );
}

export default App;
