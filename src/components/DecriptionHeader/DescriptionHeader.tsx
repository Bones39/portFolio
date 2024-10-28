// I am front end web designer/side project builder/ free lancer
// I was a technico fonctionnal consultant/ mechanical engineer
// utiliser l'effet de hyperplexed sur le hacking
// https://www.youtube.com/watch?v=W5oawMJaXbU
// mettre les emphasized clickable -> was renvoit au experience passées et le job renvoie aux projets qui ont été faits
import { useEffect, useRef, useState } from "react";
import styles from "./DescriptionHeader.module.css";

/* interface Props {
	displayedJob: string;
	onHovered: () => void;
} */

const DescriptionHeader = () => {
		const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		const jobs = ["front end web designer", "free lancer"];
		const [displayJob, setDisplayJob] = useState(jobs[1]);
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
				let innerCount = count + 1/5;
				var randomIteratedDisplay = jobs[1]
					.split("")
					.map((letter, index) => {
						if (index < innerCount) {
							return jobs[1][index];
						}
						return letters[Math.floor(Math.random()*52)];
					})
					.join("");
					setDisplayJob(randomIteratedDisplay);
				if (randomIteratedDisplay === jobs[1]) {
					console.log(`should be cleared!`);
					// stop the rendering when the word is complete
					clearInterval(interval);
				}
				console.log("rendered");
			setCount(innerCount);
			}, 50);
			return () => {clearInterval(interval);controller.abort();}
		}, [displayJob]) // need the displayJob in the dependencie array to break the initial loop of set intervalle and rebuild the useEffect each time
	return(
		<h1>I am a <span ref={jobRef} className={styles.emphasized}>{displayJob}</span></h1>
	)
}
export default DescriptionHeader;