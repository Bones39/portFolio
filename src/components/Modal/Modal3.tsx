import "./FlexModal.css"

const FlexModal = () => {
	return (
		<div className="flexWindowsContainer">
			<div id="controlBox" className="box">
				<div className="controlButtonPane"></div>
				<div className="controlButtonPane"></div>
			</div>
			<div id="screenBox" className="box">
				<div className="zoomableContainer"></div>
			</div>
		</div>
	)
}

export default FlexModal;