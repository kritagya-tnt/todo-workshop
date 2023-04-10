
import { useState } from 'react';

export const TaskForm = ({todo}: any)=>{
    const [newTask, setNewTask] = useState<string>("");

    const handleInput = (e: React.MouseEvent<HTMLElement>) =>{

        todo(newTask);

        setNewTask("");
    }
    return (
        <div className='form'>
            <input type="text"  className="input" placeholder="Enter your task" value={newTask} onChange={(e : React.ChangeEvent<HTMLInputElement>)=> setNewTask(e.target.value)}/>
            <button type="submit" className="add" onClick={handleInput}>Add Task</button>
        </div>
    );
}