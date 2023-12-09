import React, { useState } from 'react';

interface InputSectionProps {
  addTask: (taskName: string) => void;
}

const InputSection: React.FC<InputSectionProps> = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

// Function to handle input change  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };

// Function to add a task 
  const handleAddTask = () => {
    if (taskName.trim() !== '') {
      addTask(taskName);
      setTaskName('');
    }
  };

  return (
    <div className="inputSec">
      <input
        type="text"
        className="myInput"
        placeholder="Add Your Task...."
        value={taskName}
        onChange={handleInputChange}
      />
      <button className="add" onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
};

export default InputSection;