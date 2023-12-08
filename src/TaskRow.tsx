import React from 'react';
import Task from './Task';

interface TaskRowProps {
  task: Task;
  editTask: (id: number) => void;
  deleteTask: (id: number) => void;
  toggleTaskStatus: (id: number) => void;
}

const TaskRow: React.FC<TaskRowProps> = ({ task, editTask, deleteTask, toggleTaskStatus }) => {
  const { id, name, status } = task;

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td className={`task-status ${status.toLowerCase()}`} onClick={() => toggleTaskStatus(id)}>
        {status}
      </td>
      <td>
        <img src="/editIcon.jpeg" alt="img" width={40} height={38} onClick={() => editTask(id)} />
      </td>
      <td>
        <img src="/deleteIcon.jpeg" alt="img" onClick={() => deleteTask(id)} width={40} height={38} />
      </td>
    </tr>
  );
};

export default TaskRow;