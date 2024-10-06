import * as React from 'react';
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import Switch from '@mui/material/Switch';

export default function TodoList(){
    let [todos,setTodos] = useState([{task : "code",id : uuidv4(),isDone:false,urgent:true,imp:true}]);
    let [newTodo,setNewTodo] = useState("");
    let addNewTask = ()=>{
        // setTodos([...todos,{task:newTodo , id:uuidv4()}]);
        setTodos((prevTodos)=>{
             return [...prevTodos,{task:newTodo , id:uuidv4(),isDone:false,urgent:state.urgent,imp:state.imp}]
        });
        setNewTodo("");
    }
    let updateTodoValue =(event)=>{
        setNewTodo(event.target.value);
    }
    let upperCaseAll = ()=>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
                
                return{...todo,task:todo.task.toUpperCase()};
            })
        )
        setTodos(todos.map((todo)=>{
            return{...todo,task:todo.task.toUpperCase()}
        }));
   }
    let markAllDone = ()=>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
                    // todo.isDone= true;
                        return({...todo,isDone:true}) 
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
    let deleteTodo = (id)=>{
        setTodos((prevTodos)=> prevTodos.filter((todo)=> todo.id != id));
    }
    const [state, setState] = React.useState({
        urgent: false,
        imp: false,
        
      });
      const handleChange = (event) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };
    return (
        <div id="main">
            <h1 id='heading'>TODO APP</h1>
            <input id="inpT" type="text" placeholder="exercise" value={newTodo} onChange={updateTodoValue}/>
            &nbsp;&nbsp;&nbsp;
            <FormGroup sx={{display:'inline'}}>
            <FormControlLabel
            control={
                <Switch checked={state.urgent} onChange={handleChange} name="urgent" color='warning' />
            }label="Urgency"/>
            &nbsp;&nbsp;&nbsp;
            <FormControlLabel
            control={
                <Switch checked={state.imp} onChange={handleChange} name="imp"color='warning' />
            }label="Importance"
            />
            </FormGroup>
            {/* <Switch {...label} defaultChecked color="default"/> */}
            <button className="outerbtn" onClick={addNewTask}>Add Task</button>
            <button className="outerbtn" onClick={upperCaseAll}>UpperCase All</button>
            <button className="outerbtn" onClick={markAllDone}>Mark all Done</button>

            <div id='taskdiv'>
                <span className='group'>
                    <h1>Do</h1>
                    <h2>Urgent and Imp</h2>    
            <ul>
                {
                todos.map((todo)=>(
                  todo.urgent && todo.imp &&      
                <li key={todo.id} >
                <span style={todo.isDone ? {textDecorationLine:"line-through"} :{}}>{todo.task}</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="div-i">
                    <span onClick={()=>upperCaseOne(todo.id)} className="material-symbols-outlined">Uppercase</span>
                    <span  onClick={()=>markOneDone(todo.id) }className="material-symbols-outlined">task_alt</span>
                    <span onClick={()=>deleteTodo(todo.id)} className="material-symbols-outlined">delete</span>
                    </div>
                </li>))}
            </ul>
                </span>
                <span className='group'>
                <h1>Delegate</h1>
                    <h2>Urgent but not imp</h2>
                    <ul>
                {
                todos.map((todo)=>(
                  todo.urgent && !todo.imp &&      
                <li key={todo.id} >
                <span style={todo.isDone ? {textDecorationLine:"line-through"} :{}}>{todo.task}</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="div-i">
                    <span onClick={()=>upperCaseOne(todo.id)} className="material-symbols-outlined">Uppercase</span>
                    <span  onClick={()=>markOneDone(todo.id) }className="material-symbols-outlined">task_alt</span>
                    <span onClick={()=>deleteTodo(todo.id)} className="material-symbols-outlined">delete</span>
                    </div>
                </li>))}
            </ul>
                </span>
                <span className='group'>
                <h1>Schedule</h1>
                    <h2>Not urgent but imp</h2>
                    <ul>
                {
                todos.map((todo)=>(
                  !todo.urgent && todo.imp &&      
                <li key={todo.id} >
                <span style={todo.isDone ? {textDecorationLine:"line-through"} :{}}>{todo.task}</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="div-i">
                    <span onClick={()=>upperCaseOne(todo.id)} className="material-symbols-outlined">Uppercase</span>
                    <span  onClick={()=>markOneDone(todo.id) }className="material-symbols-outlined">task_alt</span>
                    <span onClick={()=>deleteTodo(todo.id)} className="material-symbols-outlined">delete</span>
                    </div>
                </li>))}
            </ul>
                </span>
                <span className='group'>
                <h1>Eliminate</h1>
                    <h2>Not urgent not imp</h2>
                    <ul>
                {
                todos.map((todo)=>(
                  !todo.urgent && !todo.imp &&      
                <li key={todo.id} >
                <span style={todo.isDone ? {textDecorationLine:"line-through"} :{}}>{todo.task}</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="div-i">
                    <span onClick={()=>upperCaseOne(todo.id)} className="material-symbols-outlined">Uppercase</span>
                    <span  onClick={()=>markOneDone(todo.id) }className="material-symbols-outlined">task_alt</span>
                    <span onClick={()=>deleteTodo(todo.id)} className="material-symbols-outlined">delete</span>
                    </div>
                </li>))}
            </ul>
                </span>
            </div>
        </div>
    )
}