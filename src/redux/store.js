import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './reducers';

// Function to load tasks from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('tasks');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};
// Function to save tasks to local storage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('tasks', serializedState);
  } catch (err) {
    // Ignore write errors
    console.log("data is not saved")
  }
};

const preloadedState = loadState();

// Configure the Redux store with the task reducer and preloaded state
const store = configureStore({
  reducer: taskReducer,
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
