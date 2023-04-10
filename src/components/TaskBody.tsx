import { useState } from "react";
import { TaskForm } from "./TaskForm";
import { Task } from "./Task";
import { EditTaskForm } from "./EditTaskform";

//interface for task
export interface Itask {
    id : number,
    title : string,
    completed : boolean,
    edit : boolean
}

export const TaskBody = ()=>{
    const [taskList, setTaskList] = useState<Itask[]>([]);

    const todo = (newTask : string) =>{
        const task = {
          id : taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1,
          title : newTask,
          completed : false,
          edit : false
        }
        setTaskList([...taskList,task]);
    }

    const completeTask = (id: number) => {
        setTaskList(taskList.map((task: Itask)=>{
          if(task.id === id){
            if(task.completed === false){
              return {...task, completed : true}
            }else {
              return {...task, completed : false}
            }
            
          }else {
            return task;
          }
        }))
      }

    const deleteTask = (id : number) => {
        setTaskList(taskList.filter((task: Itask)=> task.id !== id));
    }

    const editTask = (id : number) => {
      setTaskList(taskList.map((task : Itask)=> task.id === id ? {...task, edit : !task.edit} : task))
    }

    const editItem = (id : number, title : string)=>{
      setTaskList(taskList.map((task : Itask) => task.id === id ? {...task, title, edit : !task.edit} : task))
    }

    return (
        <div className="container">
            <h1 className='heading'>TODO LIST</h1>
            <TaskForm todo ={todo} />
            <div className="tasks">
                {taskList.map((task : Itask)=>( 
                    task.edit ? (<EditTaskForm editItem={editItem} task={task}/>) : 
                    (
                      <Task task={task} key={task.id} completeTask={completeTask} deleteTask={deleteTask} editTask={editTask}/>
                    )
                    
                ))}
            </div>
        </div>
        
    );
}