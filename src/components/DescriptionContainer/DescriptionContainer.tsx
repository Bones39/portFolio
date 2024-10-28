import { useEffect, useState } from "react";
import DescriptionHeader from "../DecriptionHeader/DescriptionHeader";

const DescriptionContainer = ()	=> {
	// let iteration = 0;
	const [index, setIndex] = useState(0);
	const jobs = ["front end web designer", "free lancer"];
	const [displayJob, setDisplayJob] = useState(jobs[1]);

	useEffect(() => {
		const mainInterval = setInterval(()=>{
			setIndex((index + 1) % jobs.length);
			console.log("from parent" + jobs[index]);
		},5000);
	}, []);
	
	return(
		<div className="descriptionContainer">
			<DescriptionHeader></DescriptionHeader>
		</div>
	)
}

export default DescriptionContainer;