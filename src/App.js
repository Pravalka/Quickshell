import React, { useState } from 'react';
import KanbanBoard from './components/KanbanBoard';
import './components/KanbanBoard.css';

function App() {
  const [groupBy, setGroupBy] = useState('status'); // Default grouping by 'status'

  return (
    <div className="app">
      <div className="controls">
        <button onClick={() => setGroupBy('status')}>Group by Status</button>
        <button onClick={() => setGroupBy('user')}>Group by User</button>
        <button onClick={() => setGroupBy('priority')}>Group by Priority</button>
      </div>
      <KanbanBoard groupBy={groupBy} />
    </div>
  );
}

export default App;
