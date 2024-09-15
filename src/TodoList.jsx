import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function TodoList(){
    let [todos,setTodos] = useState([{task : "code",id : uuidv4(),isDone:false}]);
    let [newTodo,setNewTodo] = useState("");
    let addNewTask = ()=>{
        // setTodos([...todos,{task:newTodo , id:uuidv4()}]);
        setTodos((prevTodos)=>{
             return [...prevTodos,{task:newTodo , id:uuidv4(),isDone:false}]
        });
        setNewTodo("");
        // console.log(todos);
    }
    let updateTodoValue =(event)=>{
        setNewTodo(event.target.value);
        // console.log(event.target.value)
    }
    let deleteTodo = (id)=>{
        setTodos((prevTodos)=> prevTodos.filter((todo)=> todo.id != id));
    }
    let upperCaseAll = ()=>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
                
                return{...todo,task:todo.task.toUpperCase()};
            })
        )
        // setTodos(todos.map((todo)=>{
        //     return{...todo,task:todo.task.toUpperCase()}
        // }));
    }
    let upperCaseOne = (id)=>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
                if(todo.id == id){
                   
                    return{...todo,task:todo.task.toUpperCase()};
                }else{
                    return todo;
                }
            })
        )
    }
    let markOneDone = (id)=>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
                if(todo.id == id){
                    // todo.isDone = true;
                    // console.log("if",todo.isDone)
                    return{...todo,isDone:true};
                }else{
                    return todo;
                }
            })
        )
    }
    let markAllDone = ()=>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
                    // todo.isDone= true;
                        return({...todo,isDone:true}) 
            })
        )
    }
    return (
        <div>
            <h1>Todo task</h1>
            <input type="text"  value={newTodo} onChange={updateTodoValue}/>
            <button className="outerbtn" onClick={addNewTask}>Add Task</button>
            <ul>
                {
                todos.map((todo)=>(
                <li key={todo.id} >
                <span style={todo.isDone ? {textDecorationLine:"line-through"} :{}}>{todo.task}</span>
                    {/* {console.log(todo)}
                        { todo.isDone ?
                            <span id="spant" style={doneStyles}>{todo.task}</span>
                            : <span id="spant">{todo.task}</span>
                        } */}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="div-i">
                    <span onClick={()=>deleteTodo(todo.id)} className="material-symbols-outlined">delete</span>
                    <span onClick={()=>upperCaseOne(todo.id)} className="material-symbols-outlined">Uppercase</span> 
                    <span  onClick={()=>markOneDone(todo.id) }className="material-symbols-outlined">task_alt</span>  
                    </div>
                </li>))}
            </ul>
      
            <button className="outerbtn" onClick={upperCaseAll}>UpperCase All</button>
            <button className="outerbtn" onClick={markAllDone}>Mark all Done</button>
        </div>
    )
}