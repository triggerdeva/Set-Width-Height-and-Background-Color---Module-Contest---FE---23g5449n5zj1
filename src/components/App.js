import React, { useState } from 'react';
import '../styles/App.css';

const App = () => {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [boxes, setBoxes] = useState([]);

  const handleWidthChange = (event) => {
    setWidth(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleColorChange = (event) => {
    setBackgroundColor(event.target.value);
  };

  const handleCreateBox = () => {
    const newBox = {
      width,
      height,
      backgroundColor,
    };
    setBoxes([...boxes, newBox]);
    setWidth("");
    setHeight("");
    setBackgroundColor("");
  };

  return (
    <div id="main">
      <h1>Box Creator</h1>
      <div>
        <label htmlFor="width">Width:</label>
        <input
          id="width"
          type="number"
          value={width}
          onChange={handleWidthChange}
        />
      </div>
      <div>
        <label htmlFor="height">Height:</label>
        <input
          id="height"
          type="number"
          value={height}
          onChange={handleHeightChange}
        />
      </div>
      <div>
        <label htmlFor="backgroundColor">Background Color:</label>
        <input
          id="backgroundColor"
          type="text"
          value={backgroundColor}
          onChange={handleColorChange}
        />
      </div>
      <button className='create-btn' onClick={handleCreateBox}>Create Box</button>
      <div id="box-container">
        {boxes.map((box, index) => (
          <div
            key={index}
            style={{
              width: `${box.width}px`,
              height: `${box.height}px`,
              backgroundColor: box.backgroundColor,
              margin: "10px",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
