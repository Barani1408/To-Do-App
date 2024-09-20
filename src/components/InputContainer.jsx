import React from "react";

function InputContainer({inputvalue,writeTodo,addTodo}) {
  return (
    <div className="input-container">
      <input type="text" placeholder="Enter A Task" value={inputvalue} onChange={writeTodo}/>
      <button onClick={addTodo}> + </button>
    </div>
  );
}

export default InputContainer;
