import React, { useState } from "react";

const MovingButton = () => {
  const initialPosition = { x: 48, y: 50 };
  const [position, setPosition] = useState(initialPosition);
  const [movesLeft, setMovesLeft] = useState(3);

  const moveButton = (event) => {
    event.preventDefault();

    if (movesLeft > 0) {
      const newX = Math.random() * (100 - 0) + 0; 
      const newY = Math.random() * (100 - 0) + 0; 

      setPosition({ x: newX, y: newY });

      setMovesLeft(movesLeft - 1);
    } else {
      setTimeout(() => {
        setPosition(initialPosition);

        setMovesLeft(3);
      }, 500); 
    }
  };

  return (
    <button
      style={{
        position: "absolute",
        top: `${position.y}%`,
        left: `${position.x}%`,
        color: "black",
        backgroundColor: "transparent",
        border: "solid 1px",
        borderColor: "rgba(0, 0, 0, 0.4)",
        padding: "10px",
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.4)"
        
      }}
      onClick={moveButton}
    >
      assinar
    </button>
  );
};

export default MovingButton;
