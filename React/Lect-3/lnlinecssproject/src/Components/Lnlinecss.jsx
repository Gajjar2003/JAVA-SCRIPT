import React from 'react';
import './style.css';

function Lnlinecss() {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "red" }}>
        Welcome to Inline CSS
      </h1>

      <div className="container">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </div>
  );
}

export default Lnlinecss;