import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  return (
    <div class="app-container">
      <header class="app-header">
        <h1>To-Do List</h1>
      </header>
      <main>
        <TaskInput />
        <TaskList />
      </main>
    </div>
  );
}

export default App;
