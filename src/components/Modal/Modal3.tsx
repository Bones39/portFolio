import { useCallback, useRef, useState } from "react";
import "./FlexModal.css"

type CellState = boolean;

const numRows = 50;
const numCols = 70;
const cellSize = 10;

// Generate an empty grid
const generateEmptyGrid = (): CellState[][] => {
	return Array.from({ length: numRows }, () =>    /** why is this working??? { length: numRows } */
		Array.from({ length: numCols }, () => false)
	);
};

const FlexModal = () => {

	// define state hooks
	const [grid, setGrid] = useState<CellState[][]>(() => generateEmptyGrid());
	const [scale, setScale] = useState<number>(1);
	const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
	const [dragging, setDragging] = useState<boolean>(false);
  	const [origin, setOrigin] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
	const [running, setRunning] = useState<boolean>(false);


	// define const variables
	const runningRef = useRef(running);
	const containerRef = useRef<HTMLDivElement>(null);
	runningRef.current = running;

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
		<div className="flexWindowsContainer">
			<div id="controlBox" className="box">
				<div className="controlButtonPane">
					<button onClick= {() => {
						setRunning(!running);
						if (!running) {
							runningRef.current = true;
							runSimulation();
						}
					}}>
						{running ? 'Stop' : 'Start'}
					</button>
					<button
						onClick={() => {
						setGrid(generateEmptyGrid());
						}}>
						Clear
					</button>
					<button
						onClick={() => {
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
					<div id="counter">{"a construire"}</div>
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
						{/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum nostrum illo nobis, dignissimos aut maxime sint eos, non, possimus dolores ad obcaecati omnis libero? Fugit voluptas nisi alias maxime quo, omnis voluptatum id at ipsa molestiae cupiditate odio! Ipsa amet odio architecto modi nobis et quo similique delectus quae ullam? */}
					</div>
				</div>
			</div>
		</div>
	)
}

export default FlexModal;