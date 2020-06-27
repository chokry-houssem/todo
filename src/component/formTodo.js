import React,{useState} from 'react'
import '../App.css'



 function TodoForm({addTodo}) {
    const [value , setValue]=useState("");
    const handleSubmit =e=>{
        e.preventDefault()
        if(value.trim()){
       addTodo(value);
        setValue("")
        }
    };
    return (
           <form onSubmit={handleSubmit}>
                <input id="Add" type="input" class="form__field" placeholder="Add Text" value={value}
                 onChange={e=> setValue(e.target.value)} required >
                 </input>
           </form>
    );
}
export default TodoForm;