import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'
import AddTask from "./components/AddTask";


function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'See the doctor',
      date: 'June 10th at 14:00hrs',
      reminder: true,
    },
    {
      id: 2,
      text: 'Play Basketball',
      date: 'June 12th at 16:00hrs',
      reminder: true,
    },
    {
      id: 3,
      text: 'Write some React',
      date: 'June 20th at 13:00hrs',
      reminder: true,
    },
    {
      id: 4,
      text: 'Teach a class',
      date: 'June 22th at 21:00hrs',
      reminder: true,
    },
  ])
  // adding a task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // deleting a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // toggling the reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'There are no tasks to display'}
    </div>
  );
}

export default App;
