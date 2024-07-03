import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setTask('');
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        dispatch(addTask(task));
        setTask('');
    }
  }

  return (
    <div class="add-task">
      <input
        type="text"
         className="task-input"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Add New Task"
      />
      <button className="submit-task" onClick={handleAddTask}></button>
    </div>
  );
};

export default TaskInput;
