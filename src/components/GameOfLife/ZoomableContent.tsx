import React, { useState, useRef } from 'react';
import './Zoomable.css'; // We'll define styles here

const ZoomableContent: React.FC = () => {
  const [scale, setScale] = useState<number>(1);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [dragging, setDragging] = useState<boolean>(false);
  const [origin, setOrigin] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);

  // ... Event handlers will go here
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

  return (
	<div
		ref={containerRef}
		className="zoomable-container"
		onWheel={handleWheel}
		onMouseDown={handleMouseDown}
		onMouseMove={handleMouseMove}
		onMouseUp={handleMouseUp}
		onMouseLeave={handleMouseUp}
		>
		<div
			className="zoomable-content"
			style={{
			transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
			}}>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vitae provident quia magnam sed quidem,
			aut cupiditate est dolores, pariatur ducimus dolorum consequatur! Quidem explicabo consectetur autem
			dicta magni dolorum! Perspiciatis nobis aliquid magnam pariatur a, iusto quis. Numquam sapiente vero
			saepe eveniet ipsam voluptate ullam blanditiis optio, in nulla, beatae labore eos necessitatibus accusamus.
			Quo odit ea id fugit tempora nobis perspiciatis quos magni impedit, laborum laboriosam non ducimus?
		</div>
	</div>
  );
};

export default ZoomableContent;