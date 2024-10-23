import { useState } from "react";
import DescriptionHeader from "../DecriptionHeader/DescriptionHeader";

const DescriptionContainer = ()	=> {
	// let iteration = 0;

	/* const interval = setInterval(()=>{
		var modified = displayJob
			.split("")
			.map((letter, index) => {
				if (index < iteration) {
					return jobs[1][index];
				}
				return letters[Math.floor(Math.random()*26)];
			})
			.join("");
			setDisplayJob(modified);

			if (iteration>=displayJob.length) {
				clearInterval(interval);
			}

			iteration++;
	},5000); */
	
	return(
		<div className="descriptionContainer">
			<DescriptionHeader></DescriptionHeader>
		</div>
	)
}
export default DescriptionContainer;