import React, { useState } from 'react';
import './App.css';
import TableDisplay from './components/TableDisplay';

function App() {
  const [selectedTable, setSelectedTable] = useState(null);

  const handleClick = (num) => {
    setSelectedTable(num);
  };

  return (
    <div className="app">
      <h1 style={{color:"black"}}>📚 Mariya's Cute Tables!</h1>
      <div className="button-container">
        {[...Array(8)].map((_, i) => (
          <button key={i} onClick={() => handleClick(i + 2)}>
            Table of {i + 2}
          </button>
        ))}
      </div>
      {selectedTable && <TableDisplay number={selectedTable} />}
    </div>
  );
}

export default App;
