import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import Switch from '@mui/material/Switch';

export default function TodoList(){
    let [todos,setTodos] = useState([{task : "Code",id : uuidv4(),isDone:false,urgent:true,imp:true}]);
    let [newTodo,setNewTodo] = useState("");
    let addNewTask = ()=>{
        // setTodos([...todos,{task:newTodo , id:uuidv4()}]);
        setTodos((prevTodos)=>{
             return [...prevTodos,{task:newTodo , id:uuidv4(),isDone:false,urgent:state.urgent,imp:state.imp}]
        });
        setNewTodo("");
        setState({
            urgent:false,
            imp:false
        })
    }
    let updateTodoValue =(event)=>{
        setNewTodo(event.target.value);
    }
    let markOneDone = (id)=>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
                if(todo.id == id){
                    // todo.isDone = true;
                    // console.log("if",todo.isDone)
                    return{...todo,isDone:!todo.isDone};
                }else{
                    return todo;
                }
            })
        )
    }
    let deleteTodo = (id)=>{
        setTodos((prevTodos)=> prevTodos.filter((todo)=> todo.id != id));
    }
    const [state, setState] = useState({
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
        <div id="main-container">
            <h1 id='heading' style={{textAlign:"center"}}>TODO APP</h1>
            <div className='searchdiv'>
                 <input style={{padding:"0.4rem 0.8rem",fontSize:"1.2rem",marginBottom:"2rem",background:"aliceblue"}} type="text" placeholder="Exercise" value={newTodo} onChange={updateTodoValue} required/>
            &nbsp;&nbsp;&nbsp;
            <FormGroup sx={{display:'inline'}}>
            <FormControlLabel
            control={
                <Switch checked={state.urgent} onChange={handleChange} name="urgent" sx={{
                        color: 'white', 
                        '&.Mui-checked': {
                        color: '#3b5f7e',
                        },
                        '& .MuiSwitch-track': {
                        backgroundColor: 'white', 
                        opacity: 0.1,
                        },
                        '& .Mui-checked + .MuiSwitch-track': {
                        backgroundColor: '#3b5f7e',
                        opacity: 0.3,
                        },
                        }} />
            }label="Urgency"/>
            &nbsp;&nbsp;&nbsp;
            <FormControlLabel
            control={
                <Switch checked={state.imp} onChange={handleChange} name="imp"   sx={{
                        color: 'white', 
                        '&.Mui-checked': {
                        color: '#3b5f7e', 
                        },
                        '& .MuiSwitch-track': {
                        backgroundColor: 'white', 
                        opacity: 0.1,
                        },
                        '& .Mui-checked + .MuiSwitch-track': {
                        backgroundColor: '#3b5f7e', 
                        opacity: 0.3,
                        },
                        }}
                />
            }label="Importance"
            />
            </FormGroup>
            <button className="outerbtn" onClick={addNewTask}>Add Task</button>
            </div>

            <div id='taskdiv'>

                <span className='group'>
                <h1>Urgent And Important</h1>
                <ul>
                {
                todos.map((todo)=>(
                  todo.urgent && todo.imp &&      
                <li key={todo.id} >
                   
                    <div className="div-i">
                    {todo.isDone ? <CheckBoxIcon className='icon' onClick={()=>markOneDone(todo.id) }></CheckBoxIcon> 
                    : <CheckBoxOutlineBlankIcon className='icon' onClick={()=>markOneDone(todo.id) }></CheckBoxOutlineBlankIcon>
                }
                <span style={todo.isDone ? {textDecorationLine:"line-through"} :{}}>{todo.task}</span>
                    </div>
                   <DeleteIcon className='icon' onClick={()=>deleteTodo(todo.id)}  ></DeleteIcon>
                </li>))}
            </ul>
                </span>

                <span className='group'>
                <h1>Urgent But Not Important</h1>
                    <ul>
                {
                todos.map((todo)=>(
                  todo.urgent && !todo.imp &&      
                <li key={todo.id} >
                   
                    <div className="div-i">
                    {todo.isDone ? <CheckBoxIcon className='icon' onClick={()=>markOneDone(todo.id) }></CheckBoxIcon> 
                    : <CheckBoxOutlineBlankIcon className='icon' onClick={()=>markOneDone(todo.id) }></CheckBoxOutlineBlankIcon>
                }
                <span style={todo.isDone ? {textDecorationLine:"line-through"} :{}}>{todo.task}</span>
                    </div>
                   <DeleteIcon className='icon' onClick={()=>deleteTodo(todo.id)}  ></DeleteIcon>
                </li>))}
            </ul>
                </span>


                <span className='group'>
                <h1>Not Urgent But Important</h1>
                    <ul>
                {
                todos.map((todo)=>(
                  !todo.urgent && todo.imp &&      
                <li key={todo.id} >
                   
                    <div className="div-i">
                    {todo.isDone ? <CheckBoxIcon className='icon' onClick={()=>markOneDone(todo.id) }></CheckBoxIcon> 
                    : <CheckBoxOutlineBlankIcon className='icon' onClick={()=>markOneDone(todo.id) }></CheckBoxOutlineBlankIcon>
                }
                <span style={todo.isDone ? {textDecorationLine:"line-through"} :{}}>{todo.task}</span>
                    </div>
                   <DeleteIcon className='icon' onClick={()=>deleteTodo(todo.id)}  ></DeleteIcon>
                </li>))}
            </ul>
                </span>


                <span className='group'>
                <h1> Not Urgent Not Important</h1>
                    <ul>
                {
                todos.map((todo)=>(
                  !todo.urgent && !todo.imp &&      
                <li key={todo.id} >
                   
                    <div className="div-i">
                    {todo.isDone ? <CheckBoxIcon className='icon' onClick={()=>markOneDone(todo.id) }></CheckBoxIcon> 
                    : <CheckBoxOutlineBlankIcon className='icon' onClick={()=>markOneDone(todo.id) }></CheckBoxOutlineBlankIcon>
                }
                <span style={todo.isDone ? {textDecorationLine:"line-through"} :{}}>{todo.task}</span>
                    </div>
                   <DeleteIcon className='icon' onClick={()=>deleteTodo(todo.id)}  ></DeleteIcon>
                </li>))}
            </ul>
                </span>
            </div>
        </div>
    )
}