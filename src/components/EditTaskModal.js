import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { editTask } from '../redux/actions';

Modal.setAppElement('#root');

const EditTaskModal = ({ isOpen, onRequestClose, task }) => {
  const [newTask, setNewTask] = useState(task.text);
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(editTask({ id: task.id, newTask }));
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Edit Task">
      <h2>Edit Task</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={onRequestClose}>Cancel</button>
    </Modal>
  );
};

export default EditTaskModal;
