import React, { useState, useEffect } from 'react';

// Define types for the grid structure and state
type Grid = boolean[][];

// Create an empty grid with given dimensions
const createEmptyGrid = (rows: number, cols: number): Grid => {
  const grid: Grid = [];
  for (let row = 0; row < rows; row++) {
    const currentRow: boolean[] = [];
    for (let col = 0; col < cols; col++) {
      currentRow.push(false); // false represents a dead cell
    }
    grid.push(currentRow);
  }
  return grid;
};

// Count the number of live neighbors around a given cell
const countNeighbors = (grid: Grid, row: number, col: number): number => {
  const neighbors: [number, number][] = [
    [-1, -1], [-1, 0], [-1, 1], // Top row
    [0, -1],          [0, 1],   // Middle row
    [1, -1], [1, 0], [1, 1]     // Bottom row
  ];
  
  let liveNeighbors = 0;
  
  neighbors.forEach(([rOffset, cOffset]) => {
    const newRow = row + rOffset;
    const newCol = col + cOffset;
    
    // Check if the neighboring cell is within bounds and alive
    if (newRow >= 0 && newRow < grid.length && newCol >= 0 && newCol < grid[0].length) {
      liveNeighbors += grid[newRow][newCol] ? 1 : 0;
    }
  });

  return liveNeighbors;
};

// Apply Conway's Game of Life rules to the grid
const applyRules = (grid: Grid): Grid => {
  const newGrid: Grid = grid.map((row, rowIndex) =>
    row.map((cell, colIndex) => {
      const liveNeighbors = countNeighbors(grid, rowIndex, colIndex);

      // Conway's Game of Life rules
      if (cell) {
        return liveNeighbors === 2 || liveNeighbors === 3; // Cell stays alive
      } else {
        return liveNeighbors === 3; // Cell becomes alive
      }
    })
  );
  return newGrid;
};

// Props for GameOfLife component
interface GameOfLifeProps {
  rows?: number;
  cols?: number;
}

const GameOfLife: React.FC<GameOfLifeProps> = ({ rows = 30, cols = 30 }) => {
  const [grid, setGrid] = useState<Grid>(createEmptyGrid(rows, cols));
  const [isRunning, setIsRunning] = useState<boolean>(false);

  // Function to toggle a cell on click
  const toggleCell = (row: number, col: number): void => {
    const newGrid = [...grid];
    newGrid[row][col] = !newGrid[row][col];
    setGrid(newGrid);
  };

  // Update the grid every 100ms when the game is running
  useEffect(() => {
    let interval: number;
    if (isRunning) {
      interval = setInterval(() => {
        setGrid((prevGrid) => applyRules(prevGrid));
      }, 100);
      clearInterval(interval);
    } /* else {
      clearInterval(interval);
    } */
    return () => clearInterval(interval);
  }, [isRunning]);

  // Render the grid
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Conway's Game of Life</h1>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button onClick={() => setGrid(createEmptyGrid(rows, cols))}>Clear</button>
      
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 20px)` }}>
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              onClick={() => toggleCell(rowIndex, colIndex)}
              style={{
                width: '20px',
                height: '20px',
                backgroundColor: cell ? 'black' : 'white',
                border: '1px solid lightgray',
                cursor: 'pointer',
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default GameOfLife;
