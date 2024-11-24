import { useState } from "react";
import "./FlexModal.css"

type CellState = boolean;

const numRows = 10;
const numCols = 10;
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

	// ------------------------ event handlers ---------------------
	const handleMouseDown = (event: React.MouseEvent) => {
		setDragging(true);
		setOrigin({
			x: event.clientX - position.x * scale,
			y: event.clientY - position.y * scale,
		});
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
		/* display: 'grid',
		width: 'fit-content',
		gridTemplateColumns: `repeat(${numCols}, ${cellSize}px)`, */
		transform: `translate(${position.x}px, ${position.y}px)`,
		border: `solid 1px blue`,
		width: `1800px`,
		height: `800px`
	}

	return (
		<div className="flexWindowsContainer">
			<div id="controlBox" className="box">
				<div className="controlButtonPane"></div>
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
					<div id="counter"></div>
					<div style={STYLES_ZOOMABLE_CONTENT}>
						{/* {grid.map((row, rowIndex) =>
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
						)} */}
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum nostrum illo nobis, dignissimos aut maxime sint eos, non, possimus dolores ad obcaecati omnis libero? Fugit voluptas nisi alias maxime quo, omnis voluptatum id at ipsa molestiae cupiditate odio! Ipsa amet odio architecto modi nobis et quo similique delectus quae ullam?
					</div>
				</div>
			</div>
		</div>
	)
}

export default FlexModal;