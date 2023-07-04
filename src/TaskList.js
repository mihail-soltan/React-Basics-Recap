import Task from "./Task"
import { useState } from "react";

export default function TaskList() {
    const [tasks, setTasks] = useState(['Go shopping', 'Go to the dentist', 'Do homework', 'go to sleep'])
    const [newTask, setNewTask] = useState('')

    function addNewTask() {
        if (!newTask.length) {
            alert("Nu poti adauga un task gol")
        } else {
            setTasks([...tasks, newTask])
            setNewTask('')
        }
    }

    return (
        <div>
            <input type="text" onChange={(event) => setNewTask(event.target.value)} value={newTask} />
            <button onClick={addNewTask} disabled={!newTask.length} >Add new task</button>
            <ul>
                {tasks.map((task) =>
                    <Task key={Math.floor(Math.random() * 100000)} task={task} />
                )}
            </ul>
        </div>
    )
}