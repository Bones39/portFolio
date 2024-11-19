// App.tsx
import React, { useState, useCallback, useRef } from 'react';
import './App.css';
import './Zoomable.css'; // We'll define styles here
import { transform } from 'framer-motion';
import { calc } from '@chakra-ui/react';

type CellState = boolean;

const numRows = 50;
const numCols = 120;
const cellSize = 10;

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

const MAIN_CONTAINER: React.CSSProperties = {
	display: 'flex',
	flexDirection: 'column'
}

const GameOfLife2: React.FC = () => {
	const [grid, setGrid] = useState<CellState[][]>(() => generateEmptyGrid());
	const [running, setRunning] = useState<boolean>(false);
	const [scale, setScale] = useState<number>(1);
	const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

	const runningRef = useRef(running);
	const containerRef = useRef<HTMLDivElement>(null);
	runningRef.current = running;


/** Define the styling here because some parameters drive the style (number of colums,...) */
const GRID_CONTAINER_STYLES: React.CSSProperties = {
	display: 'grid',
	gridTemplateColumns: `repeat(${numCols}, ${cellSize}px)`,
	/* marginTop: '50px',
	marginLeft: '50px', */ /* `${((document.getElementsByClassName('modal-content')[0]?.clientWidth - (document.getElementById("gridContainer")?.clientWidth || 400) ) / 2).toString()}px` */
	border: 'solid 1.5px blue',
	width: 'fit-content',
	transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`
}

// ----------- EVENT HANDLERS ------------
// Handle zooming with the mouse wheel
const handleWheel = (event: React.WheelEvent) => {
	event.preventDefault();

		// Get the bounding rectangle of the container
		const rect = containerRef.current?.getBoundingClientRect();
		if (!rect) return;

		// Mouse position relative to the container
		const mouseX = event.clientX - rect.left;
		const mouseY = event.clientY - rect.top;

		// Calculate the scale factor
		const deltaScale = -event.deltaY / 500; // Adjust zoom sensitivity
		const newScale = Math.min(Math.max(scale + deltaScale, 0.5), 3); // Limit scale between 0.5x and 3x

		// Calculate the scaling ratio
		const scaleRatio = newScale / scale;

		// Adjust the position to keep the content centered on zoom
		const newPosition = {
			x: position.x - (mouseX - position.x) * (scaleRatio - 1),
			y: position.y - (mouseY - position.y) * (scaleRatio - 1),
		};

		// Update state
		setScale(newScale);
		setPosition(newPosition);
	};

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
    <div style={MAIN_CONTAINER} className='main-container'>
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
		<div ref={containerRef} className='zoomable-container' onWheel={handleWheel}>
			<div style={{
				display: 'grid',
				gridTemplateColumns: `repeat(${numCols}, ${cellSize}px)`,
				/* marginTop: '50px',
				marginLeft: '50px', */ /* `${((document.getElementsByClassName('modal-content')[0]?.clientWidth - (document.getElementById("gridContainer")?.clientWidth || 400) ) / 2).toString()}px` */
				border: 'solid 1.5px blue',
				width: 'fit-content',
				transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
				transformOrigin: `center center`
			}} /* className='zoomable-content' */ id="gridContainer">
				{grid.map((row, rowIndex) =>
					row.map((cell, colIndex) => (
					<div
						key={`${rowIndex}-${colIndex}`}
						onClick={() => {
							const newGrid = grid.map((row, i) =>
								row.map((cell, j) =>
								i === rowIndex && j === colIndex ? !cell : cell // if hte current cell is clicked, switch the state, othws keep current state
								)
							);
							setGrid(newGrid);
						}}
						style={{
							width: cellSize,
							height: cellSize,
							backgroundColor: cell ? 'black' : 'white',
							border: 'solid 1px #ccc',
						}}
					/>
					))
				)}
			</div>
		</div>
    </div>
  );
};

export default GameOfLife2;
