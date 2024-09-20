import React, { useState } from "react";
import "./App.css";
import InputContainer from "./components/InputContainer";
import TodoContainer from "./components/TodoContainer";

function App() {
  let [inputvalue, setInputvalue] = useState("");
  let [todos, setTodos] = useState([]);

  function writeTodo(e){
    setInputvalue(e.target.value)
  }

  function addTodo(){
    if(inputvalue !== ""){
      setTodos((prevTodos)=>[...prevTodos,inputvalue])
      setInputvalue("");
    }
  }

  function deleteTodo(todoIndex){
    setTodos((prevTodos)=>prevTodos.filter((prevTodos,prevTodosIndex)=>{
      return prevTodosIndex !== todoIndex;
    }

    ))

  }

  console.log(todos)

  return (
    <main>
      <h1> To Do List </h1>
      <InputContainer inputvalue={inputvalue} writeTodo={writeTodo} addTodo={addTodo} />
      <TodoContainer todos={todos} deleteTodo={deleteTodo}/>
    </main>
  );
}

export default App;
