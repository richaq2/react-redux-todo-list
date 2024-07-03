import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask, } from '../redux/actions';

const TaskList = () => {
  // Retrieve tasks from the Redux store
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  // State for managing the task being edited
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTaskText, setEditingTaskText] = useState('');

  // Handle task deletion
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  // Handle task editing
  const handleEdit = (task) => {
    setEditingTaskId(task.id);
    setEditingTaskText(task.text);
  };

  // Save the edited task
  const handleSave = (id) => {
    dispatch(editTask({ id, newTask: editingTaskText }));
    setEditingTaskId(null);
    setEditingTaskText('');
  };

  // Capitalize the first letter of the task text
  const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

 // Return null if tasks is not an array
  if (!Array.isArray(tasks)) {
    return null;
  }

  return (
    <div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li className="task-list-item" key={task.id}>
            <label className="task-list-item-label">
              <input className='check-input'
               type="checkbox" />
              {editingTaskId === task.id ? (
                <input
                  type="text"
                  className='edit-input'
                  value={editingTaskText}
                  onChange={(e) => setEditingTaskText(e.target.value)}
                  onBlur={() => handleSave(task.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSave(task.id);
                    }
                  }}
                  autoFocus
                />
              ) : (
                <span>{capitalizeFirstLetter(task.text)}</span>
              )}
            </label>
            <span className="edit-btn" onClick={() => handleEdit(task)}></span>
            <span className="delete-btn" onClick={() => handleDelete(task.id)}></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
