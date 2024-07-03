import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
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
