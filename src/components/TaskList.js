import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/actions';
import EditTaskModal from './EditTaskModal';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleEdit = (task) => {
    setCurrentTask(task);
    setIsModalOpen(true);
  };

  return (
    <div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li className="task-list-item" key={task.id}>
            <label class="task-list-item-label">
        <input type="checkbox"/>
				<span>{task.text}</span>
			</label>
           
              <span class="edit-btn" onClick={() => handleEdit(task)}>
              </span>
              <span class="delete-btn" onClick={() => handleDelete(task.id)}>
              </span>
            
          </li>
        ))}
      </ul>
      {currentTask && (
        <EditTaskModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          task={currentTask}
        />
      )}
    </div>
  );
};

export default TaskList;
