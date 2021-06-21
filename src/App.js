import React from "react";
import { useState } from 'react'
import Header from "./components/Header";
import Task from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
   const [showAddTask, setShowAddTask] = useState(false)

   const [tasks, setTask] = useState([
      {
         id: 1,
         text: 'Doctor Appointment',
         day: 'Feb 5th at 2:30pm',
         reminder: true
      },
      {
         id: 2,
         text: 'Meeting at Scholl',
         day: 'Feb 5th at 1:30pm',
         reminder: false
      },
      {
         id: 3,
         text: 'Food Shooping',
         day: 'Feb 5th at 6:30pm',
         reminder: true
      },
      {
         id: 4,
         text: 'Teaching',
         day: 'Feb 5th at 4:30pm',
         reminder: false
      },
   ])

   // Delete task
   const deleteTask = (id) => {
      setTask(tasks.filter((task)=> task.id !== id ))
   }

   // Toogle Reminder
   const toogleReminder = (id) => {
      setTask(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
   }

   // Add Task
   const addTask = (task) => {
      const id = Math.floor(Math.random()) * 10000 + 1
      const newTask = {id, ...task}
      setTask([...task, newTask])
   }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      { showAddTask && <AddTask onAdd={addTask} />}
      <hr style={{marginBottom: '30px'}} />
      <Task tasks={tasks} onDelete={deleteTask} onToogle={toogleReminder} />
    </div>
  );
}

// class App extends React.Component {
//    render() {
//       return 
//    }
// }


export default App;
