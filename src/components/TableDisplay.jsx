import React from 'react';

const TableDisplay = ({ number }) => {
  return (
    <div className="table-display">
      <h2>Multiplication Table of {number}</h2>
      <ul>
        {[...Array(10)].map((_, i) => (
          <li
            key={i}
            style={{
              animationDelay: `${i * 0.1}s`
            }}
          >
            {number} x {i + 1} = {number * (i + 1)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableDisplay;
