import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
export default function TodoBox({todo,title,markOneDone,deleteTodo}){
    return(
         <span className='group'>
                    <h1>{title} </h1>                 
            <ul>
                { 
                  todo.urgent && todo.imp &&      
                <li key={todo.id} >
                   
                    <div className="div-i">
                    {todo.isDone ? <CheckBoxIcon className='icon' onClick={()=>markOneDone(todo.id) }></CheckBoxIcon> 
                    : <CheckBoxOutlineBlankIcon className='icon' onClick={()=>markOneDone(todo.id) }></CheckBoxOutlineBlankIcon>
                }
                <span style={todo.isDone ? {textDecorationLine:"line-through"} :{}}>{todo.task}</span>
                    </div>
                   <DeleteIcon className='icon' onClick={()=>deleteTodo(todo.id)}  ></DeleteIcon>
                </li>}
            </ul>
                </span>
    );
};