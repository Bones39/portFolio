import { useCallback, useRef, useState } from "react";
import "./GameOfLife.css"
import { FaPlay, FaStop  } from "react-icons/fa";

type CellState = boolean;

const numRows = 62;
const numCols = 131;
const cellSize = 10;

// Generate an empty grid
const generateEmptyGrid = (): CellState[][] => {
	return Array.from({ length: numRows }, () =>    /** why is this working??? { length: numRows } */
		Array.from({ length: numCols }, () => false)
	);
};

const GameOfLife = () => {

	// define state hooks
	const [grid, setGrid] = useState<CellState[][]>(() => generateEmptyGrid());
	const [scale, setScale] = useState<number>(1);
	const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
	const [dragging, setDragging] = useState<boolean>(false);
  	const [origin, setOrigin] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
	const [running, setRunning] = useState<boolean>(false);
	const [counter, setCounter] = useState(0);


	// define const variables
	const runningRef = useRef(running);
	const containerRef = useRef<HTMLDivElement>(null);
	runningRef.current = running;
	const counterRef = useRef(counter);
	counterRef.current = counter;

	// Neighbor positions relative to a cell
	const neighborPositions = [
		[-1, -1], [-1, 0], [-1, 1], // Top row
		[0, -1],          [0, 1],   // Middle row
		[1, -1], [1, 0], [1, 1]     // Bottom row
	];

	// ------------------------ event handlers ---------------------
	const handleMouseDown = (event: React.MouseEvent) => {
		if (event.button === 1) {
			console.log("Middle click");
			setDragging(true);
			setOrigin({
				x: event.clientX - position.x * scale,
				y: event.clientY - position.y * scale,
			});
		}
	};

	const handleMouseMove = (event: React.MouseEvent) => {
		if (dragging) {
			const dx = (event.clientX - origin.x) / scale;
			const dy = (event.clientY - origin.y) / scale;
			setPosition({
				x: dx,
				y: dy,
			});
		}
	};

	const handleMouseUp = () => {
		setDragging(false);
	};

	const STYLES_ZOOMABLE_CONTENT = {
		display: 'grid',
		width: 'fit-content',
		gridTemplateColumns: `repeat(${numCols}, ${cellSize}px)`,
		transform: `translate(${position.x}px, ${position.y}px)`,
		border: `solid 1px blue`
	}

	// ---------------------- Simulation function -----------------
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
						var borderNewRow = newRow;
						var borderNewCol = newCol;
						/* if (
							newRow >= 0 &&
							newRow < numRows &&
							newCol >= 0 &&
							newCol < numCols 
						) {
						} else {
						} */
						if (newRow < 0) borderNewRow = numRows - 1;
						if (newRow >= numRows) borderNewRow = 0;
						if (newCol < 0) borderNewCol = numCols - 1;
						if (newCol >= numCols) borderNewCol = 0;
						// console.log(`newRow, newCol: [${newRow}, ${newCol}] || borderNewRow, borderNewCol: [${borderNewRow}, ${borderNewCol}]`);
						neighbors += currentGrid[borderNewRow][borderNewCol] ? 1 : 0;
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
		setCounter((c) => c + 1);
		console.log(`counter ${counterRef.current}`);
		setTimeout(runSimulation, 100);
  	}, []);

	return (
		<div className="flexWindowsContainer">
			<div id="controlBox" className="box">
				<div className="controlButtonPane">
					<button className="gameButton" onClick= {() => {
						setRunning(!running);
						if (!running) {
							runningRef.current = true;
							runSimulation();
						}
					}}>
						{running ? <> <FaStop /> Stop</> : <> <FaPlay/> Start</>}
					</button>
					<button className="gameButton" onClick={() => {
						setGrid(generateEmptyGrid());
						}}>
						Clear
					</button>
					<button className="gameButton" onClick={() => {
							const randomGrid = Array.from({ length: numRows }, () =>
								Array.from({ length: numCols }, () => Math.random() > 0.7)
							);
							setGrid(randomGrid);
						}}>
						Random
					</button>
				</div>
				<div className="controlButtonPane"></div>
				<div className="controlButtonPane"></div>
				<div className="controlButtonPane"></div>
			</div>
			<div id="screenBox" className="box">
				<div className="zoomableContainer"
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUp}
				onMouseLeave={handleMouseUp}>
					<div id="counter">{counterRef.current}</div>
					<div style={STYLES_ZOOMABLE_CONTENT} className={dragging ? 'active' : ''}>
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
										backgroundColor: cell ? 'black' : rowIndex === Math.floor(numRows/2) && colIndex === Math.floor(numCols/2)? 'lightblue' :'white',
										border: 'solid 1px #ccc',
									}}
								/>
							))
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default GameOfLife;