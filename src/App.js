import { useState } from 'react';

import './App.css';
import './global.css';

import Navbar from './components/Navbar/index';
// import Header from './components/Header/index';
import TaskList from './components/TaskList/index';

// computeds do VUE
let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
}

function App() {
  // data do VUE
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };

    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });

  }

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      })
    })
  }

  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id);
    })
  }

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList 
        title="Pendente" 
        taskState="Pendente" 
        onAddTask={addTask} 
        tasks={tasks.filter((task) => task.state === "Pendente")} 
        onTaskUpdate={updateTask} 
        onDeleteTask={deleteTask}
        />
        <TaskList 
        title="Fazendo" 
        taskState="Fazendo" 
        onAddTask={addTask} 
        tasks={tasks.filter((task) => task.state === "Fazendo")} 
        onTaskUpdate={updateTask} 
        onDeleteTask={deleteTask}
        />
        <TaskList 
        title="Concluído" 
        taskState="Concluido" 
        onAddTask={addTask} 
        tasks={tasks.filter((task) => task.state === "Concluido")} 
        onTaskUpdate={updateTask} 
        onDeleteTask={deleteTask}
        />
      </div>


    </div>
  );
}

export default App;
