import React from "react";
import { useState } from "react";

const TodoList = () => {
    const [Tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');

    let inputPlaceholder = ""

    const handleChange = (event) => {
        setTask(event.target.value);
        console.log(event.target.value)
        }

    const handleClick = () => {
        setTasks((prev) => [...prev, task]);
        console.log(task)
        setTask('');
        inputPlaceholder = "Add a task"

    }

    const ShowTasks = () => {
        return Tasks.map((task, index) => {
            return <li key={index}>{`${index}. ${task}`} </li>
        }
        )
    }

    return (
        <div>
            <input onChange = {handleChange} type = 'text' placeholder = 'Add todo' value = {inputPlaceholder} />
            <button onClick={handleClick}>Add</button>
            <ul>
                <ShowTasks/>
            </ul>

        </div>
    )
}

export default TodoList