import React, { useEffect, useState } from 'react';

const TableDisplay = ({ number }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, [number]);

  const gradients = [
    'linear-gradient(135deg, #ff6b9d, #ff8e53)',
    'linear-gradient(135deg, #a18cd1, #fbc2eb)',
    'linear-gradient(135deg, #f093fb, #f5576c)',
    'linear-gradient(135deg, #4facfe, #00f2fe)',
    'linear-gradient(135deg, #43e97b, #38f9d7)',
    'linear-gradient(135deg, #fa709a, #fee140)',
    'linear-gradient(135deg, #a1c4fd, #c2e9fb)',
    'linear-gradient(135deg, #fd746c, #ff9068)',
    'linear-gradient(135deg, #fddb92, #d1fdff)',
    'linear-gradient(135deg, #c471f5, #fa71cd)',
  ];

  return (
    <div className={`table-display ${visible ? 'is-visible' : ''}`}>
      {/* Decorative corner stars */}
      <span className="corner-star top-left">✦</span>
      <span className="corner-star top-right">✦</span>

      <div className="table-header">
        <span className="table-badge">×</span>
        <h2>Table of <em>{number}</em></h2>
      </div>

      <ul>
        {[...Array(10)].map((_, i) => (
          <li
            key={i}
            style={{
              '--gradient': gradients[i % gradients.length],
              '--delay': `${i * 0.07}s`,
            }}
          >
            <span className="factor">{number}</span>
            <span className="op">×</span>
            <span className="factor">{i + 1}</span>
            <span className="eq">=</span>
            <span className="result">{number * (i + 1)}</span>
          </li>
        ))}
      </ul>

      <span className="corner-star bottom-left">✦</span>
      <span className="corner-star bottom-right">✦</span>
    </div>
  );
};

export default TableDisplay;