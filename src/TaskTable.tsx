import React from 'react';
import Task from './Task';
import TaskRow from './TaskRow'

interface TaskTableProps {
  tasks: Task[];
  editTask: (id: number) => void;
  deleteTask: (id: number) => void;
  toggleTaskStatus: (id: number) => void;
}

const TaskTable: React.FC<TaskTableProps> = ({ tasks, editTask, deleteTask, toggleTaskStatus }) => {
  return (
    <div className="table">
      <table>
        <thead className="heading">
          <tr>
            <th>#</th>
            <th>Task Name</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <TaskRow
              key={task.id}
              task={task}
              editTask={editTask}
              deleteTask={deleteTask}
              toggleTaskStatus={toggleTaskStatus}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;