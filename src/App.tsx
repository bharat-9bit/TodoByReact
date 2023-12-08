import React, { useState } from 'react';
import Header from './Header';
import InputSection from './InputSection';
import TaskTable from './TaskTable';
import Task from './Task';


const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, name: 'Buy Grocery', status: 'ToDo' },
    { id: 2, name: 'Send Email', status: 'ToDo' },
  ]);

  const addTask = (taskName: string) => {
    const newTask: Task = { id: tasks.length+1, name: taskName, status: 'ToDo' };
    setTasks([...tasks, newTask]);
  };

  const editTask = (id: number) => {
    const taskToEdit = tasks.find(task => task.id === id);
    
    if (taskToEdit) {
      const newName = prompt('Edit task name:', taskToEdit.name);
      
      if (newName !== null) {
        const updatedTasks = tasks.map(task => {
          if (task.id === id) {
            return { ...task, name: newName };
          }
          return task;
        });
  
        setTasks(updatedTasks);
      }
    }
  };

  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const toggleTaskStatus = (id: number) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          status: task.status === 'ToDo' ? 'Complete' : 'ToDo',
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };
  

  return (
    <>
      <div className='wrapper'>
      <Header />

      <div className='inputSec'>
      <InputSection addTask={addTask} />
      </div>

      <TaskTable
        tasks={tasks}
        editTask={editTask}
        deleteTask={deleteTask}
        toggleTaskStatus={toggleTaskStatus}
      />
      </div>
    </>
  );
  };

export default App;

