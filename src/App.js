import React , {useState} from 'react';
import './App.css';
import Todo from './component/todo';
import FormTodo from './component/formTodo';

  

function App() {
  const [todos, setTodos]=useState([
    // {text : "props", isCompleted : false},
    // {text : "state",isCompleted : false},
    // {text : "hooks",isCompleted : false}
  ]);
  const addTodo = text =>{
    const newTodos = [...todos, {text}];
    setTodos(newTodos)
  }
  const completeTodo = index=>{
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
  };
  const deleteTodo= index=>{
    const newTodos=[...todos];
    newTodos.splice(index,1)
    setTodos(newTodos)
  }
    return (
      <div className="App">
        <div className="todo-list">
        <FormTodo addTodo={addTodo}/>
          {todos.map((todo, index)=>(
            <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
          ))}
         
        </div>
      </div>
      );
  }
export default App;
