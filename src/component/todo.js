import React from 'react';
import '../App.css'

 function todo( {todo,index,completeTodo,deleteTodo}) {
    return (
        <div className="todo" style={{textDecoration : todo.isCompleted ? "line-through": ""}}>{todo.text}
        <div>
        <button className="btn" onClick={()=>completeTodo(index)}><span>Complete</span></button>
        <button className="btn" onClick={()=>deleteTodo(index)}><span>X</span></button>
        </div>
        </div>

    )
}
export default todo;