// App.tsx
import React, { useState, useCallback, useRef } from 'react';
import './App.css';
import { transform } from 'framer-motion';
import { calc } from '@chakra-ui/react';

type CellState = boolean;

const numRows = 30;
const numCols = 50;

// Neighbor positions relative to a cell
const neighborPositions = [
    [-1, -1], [-1, 0], [-1, 1], // Top row
    [0, -1],          [0, 1],   // Middle row
    [1, -1], [1, 0], [1, 1]     // Bottom row
];

// Generate an empty grid
const generateEmptyGrid = (): CellState[][] => {
  return Array.from({ length: numRows }, () =>
    Array.from({ length: numCols }, () => false)
  );
};

const GRID_CONTAINER_STYLES = {
	display: 'grid',
	gridTemplateColumns: `repeat(${numCols}, 20px)`,
	marginTop: '20px',
	marginLeft: '50px' /* `${((document.getElementsByClassName('modal-content')[0]?.clientWidth - (document.getElementById("gridContainer")?.clientWidth || 400) ) / 2).toString()}px` */,
}

const GameOfLife2: React.FC = () => {
  const [grid, setGrid] = useState<CellState[][]>(() => generateEmptyGrid());
  const [running, setRunning] = useState<boolean>(false);
  const runningRef = useRef(running);
  runningRef.current = running;

  // Simulation function
	const runSimulation = useCallback(() => {
		if (!runningRef.current) {
			return;
		}

		setGrid((currentGrid) => {
			return currentGrid.map((row, rowIndex) =>
			row.map((cell, colIndex) => {
				let neighbors = 0;
				neighborPositions.forEach(([x, y]) => {
				const newRow = rowIndex + x;
				const newCol = colIndex + y;
				if (
					newRow >= 0 &&
					newRow < numRows &&
					newCol >= 0 &&
					newCol < numCols
				) {
					neighbors += currentGrid[newRow][newCol] ? 1 : 0;
				}
				});

				// Apply Conway's rules
				if (cell) {
				return neighbors === 2 || neighbors === 3;
				} else {
				return neighbors === 3;
				}
			})
			);
		});

		setTimeout(runSimulation, 100);
  	}, []);

  return (
    <div>
		<h1>Conway's Game of Life</h1>
		<div>
			<button
				onClick={() => {
					setRunning(!running);
					if (!running) {
						runningRef.current = true;
						runSimulation();
					}
				}}
			>
				{running ? 'Stop' : 'Start'}
			</button>
			<button
				onClick={() => {
				setGrid(generateEmptyGrid());
				}}
			>
				Clear
			</button>
			<button
				onClick={() => {
					const randomGrid = Array.from({ length: numRows }, () =>
						Array.from({ length: numCols }, () => Math.random() > 0.7)
					);
					setGrid(randomGrid);
				}}
			>
				Random
			</button>
		</div>
		<div style={GRID_CONTAINER_STYLES} id="gridContainer">
			{grid.map((row, rowIndex) =>
				row.map((cell, colIndex) => (
				<div
					key={`${rowIndex}-${colIndex}`}
					onClick={() => {
					const newGrid = grid.map((row, i) =>
						row.map((cell, j) =>
						i === rowIndex && j === colIndex ? !cell : cell /** if hte current cell is clicked, switch the state, othws keep current state */
						)
					);
					setGrid(newGrid);
					}}
					style={{
					width: 18,
					height: 18,
					backgroundColor: cell ? 'black' : 'white',
					border: 'solid 1px #ccc',
					}}
				/>
				))
			)}
		</div>
    </div>
  );
};

export default GameOfLife2;
