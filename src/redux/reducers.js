import { createSlice } from '@reduxjs/toolkit';
// Initial state with an empty array of tasks
const initialState = {
  tasks: [],
};
// Task slice with reducers for adding, deleting, editing.
const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ id: Date.now(), text: action.payload, completed: false });
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      saveState(state.tasks); // Save updated state to local storage
    },
    editTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);
      if (task) {
        task.text = action.payload.newTask;
        saveState(state.tasks); // Save updated state to local storage
      }
    },
 
  },
});

const saveState = (tasks) => {
  try {
    const serializedState = JSON.stringify(tasks);
    localStorage.setItem('tasks', serializedState);
  } catch (err) {
    // Ignore write errors
    console.log("error on saving")
  }
};

export const { addTask, deleteTask, editTask, toggleTaskComplete } = taskSlice.actions;
export default taskSlice.reducer;
