// I am front end web designer/side project builder/ free lancer
// I was a technico fonctionnal consultant/ mechanical engineer
// utiliser l'effet de hyperplexed sur le hacking
// https://www.youtube.com/watch?v=W5oawMJaXbU
// mettre les emphasized clickable -> was renvoit au experience passées et le job renvoie aux projets qui ont été faits
import { useEffect, useRef, useState } from "react";
import styles from "./DescriptionHeader.module.css";

interface Props {
	displayJob: string;
	randomInitialDisplay: string;
	changeIndex: boolean;
	setChangeIndex: (changeIndex: boolean) => void;
	// setDisplayJob: (displayJob: string) => void;
}

const DescriptionHeader = ({displayJob, randomInitialDisplay, changeIndex, setChangeIndex}: Props) => {
		const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		const jobs = ["front end web designer", "free lancer"];
		const [innerDisplayJob, setInnerDisplayJob] = useState(randomInitialDisplay);
		const [count, setCount] = useState(0);
		const jobRef = useRef<HTMLSpanElement>(null);
		useEffect(() => {
			const controller = new AbortController();
			// setIndex((index + 1) % jobs.length);
			// console.log(jobs[index]);
			var jobToDisplay = jobs[1];
			// reset inner count
			// setCount(0);
			const interval = setInterval(()=> {
				let innerCount = count + 1/4;
				// generate a random word
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
						// setCount(0);
						// innerCount = 0;
						// stop the rendering when the word is complete
						clearInterval(interval);
						setTimeout(() => {
							if (!changeIndex) {
								console.log("change the index!");
								setChangeIndex(true);
							}
						}, 10000);
				}
				console.log("rendered");
				console.log(innerCount);
				clearInterval(interval);
				setCount(innerCount);
			}, 50);
			return () => {clearInterval(interval);controller.abort();}
		}, [innerDisplayJob]) // need the displayJob in the dependencie array to break the initial loop of set intervalle and rebuild the useEffect each time
	return(
		<h1>I am a <span ref={jobRef} className={styles.emphasized}>{innerDisplayJob}</span></h1>
	)
}
export default DescriptionHeader;