// I am front end web designer/side project builder/ free lancer
// I was a technico fonctionnal consultant/ mechanical engineer
// utiliser l'effet de hyperplexed sur le hacking
// https://www.youtube.com/watch?v=W5oawMJaXbU
// mettre les emphasized clickable -> was renvoit au experience passées et le job renvoie aux projets qui ont été faits
import { useEffect, useRef, useState } from "react";
import styles from "./DescriptionHeader.module.css";

interface Props {
	displayJob: string;
	// randomInitialDisplay: string;
	changeIndex: boolean;
	setChangeIndex: (changeIndex: boolean) => void;
	setInnerDisplayJob: (displayJob: string) => void;
	innerDisplayJob: string;
}

const DescriptionHeader = ({displayJob, setInnerDisplayJob, changeIndex, setChangeIndex, innerDisplayJob}: Props) => {
		const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		const jobs = ["front end web designer", "free lancer"];
		// const [innerDisplayJob, setInnerDisplayJob] = useState(randomInitialDisplay);
		const [count, setCount] = useState(0);
		const jobRef = useRef<HTMLSpanElement>(null);

		let innerCount = 0;

		useEffect(() => {
			const controller = new AbortController();
			// setIndex((index + 1) % jobs.length);
			// console.log(jobs[index]);
			var jobToDisplay = jobs[1];
			// reset inner count
			// setCount(0);
			const interval = setInterval(()=> {
				innerCount = displayJob.length < innerCount ? 0 : count + 1/4;
				// generate a random word
				if (innerDisplayJob !== displayJob) {
					var randomIteratedDisplay = displayJob
					.split("")
					.map((letter, index) => {
						if (index < innerCount) {
							return displayJob[index];
						}
						return letters[Math.floor(Math.random()*52)];
					})
					.join("");
					setInnerDisplayJob(randomIteratedDisplay);
					clearInterval(interval);
					if (randomIteratedDisplay === displayJob) {
						setInnerDisplayJob(randomIteratedDisplay);
						console.log(`should be cleared!`);
						// if inner count is reset here: infinite rendering
						setCount(0);
						innerCount = 0;
						// stop the rendering when the word is complete
						clearInterval(interval);
						console.log("from child change Index " + changeIndex);
						setTimeout(() => {
							if (!changeIndex) {
								console.log("change the index!");
								setChangeIndex(true);
							}
						}, 8000);
					}
					console.log("rendered");
					console.log(innerCount);
					setCount(innerCount);
					clearInterval(interval);
				} else {
					clearInterval(interval);
				}
			}, 50);
			return () => {clearInterval(interval);controller.abort();}
		}, [innerDisplayJob]) // need the displayJob in the dependencie array to break the initial loop of set intervalle and rebuild the useEffect each time
	return(
		<h1>I am a <span ref={jobRef} className={styles.emphasized}>{innerDisplayJob}</span></h1>
	)
}
export default DescriptionHeader;