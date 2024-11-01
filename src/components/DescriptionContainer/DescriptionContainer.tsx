import { useEffect, useState } from "react";
import DescriptionHeader from "../DecriptionHeader/DescriptionHeader";

const DescriptionContainer = ()	=> {
	// let iteration = 0;
	const [index, setIndex] = useState(0);
	const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const jobs = ["front end web designer", "free lancer"];
	const [displayJob, setDisplayJob] = useState(jobs[1]);
	// const [randomInitialDisplay, setRandomInitialDisplay] = useState("test");
	const [innerDisplayJob, setInnerDisplayJob] = useState("randomInitialDisplay");
	const [changeIndex, setChangeIndex] = useState(() => false); // this state will only be modified by the child component when it finishes rendering

	useEffect(() => {
		setIndex((index + 1) % jobs.length);
		console.log("from parent " + jobs[index]);
		var random = jobs[index]
			.split("")
			.map((letter, index) => {
				return letters[Math.floor(Math.random()*52)];
			})
			.join("");
		setDisplayJob(jobs[index]);
		setInnerDisplayJob(random);
		console.log("change Index " + changeIndex);
	}, [changeIndex]);
	
	return(
		<div className="descriptionContainer">
			<DescriptionHeader displayJob={displayJob} changeIndex={changeIndex} setChangeIndex={setChangeIndex} setInnerDisplayJob={setInnerDisplayJob} innerDisplayJob={innerDisplayJob}></DescriptionHeader>
		</div>
	)
}

export default DescriptionContainer;