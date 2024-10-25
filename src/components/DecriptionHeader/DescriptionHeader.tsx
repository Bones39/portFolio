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
		//

		/* const randomizeDisplay = (nbOfRenders: number) => {
			let iteration = 0;
			let randomIteratedDisplay = displayJob
				.split("")
				.map((letter, index) => {
					// use the original letter for the first n th letter 
					if (index < 4) {
						return jobs[1][index];
					}
					// else, use a random letter
					iteration++;
					return letters[Math.floor(Math.random()*26)];
				})
				.join("");
				// console.log(iteration);
				// console.log("lenght " + displayJob.length);
				
				if (iteration < displayJob.length) {
					setDisplayJob(randomIteratedDisplay);
				}
			
		}
		setTimeout(() => {
			let nbOfRenders = 1;
			randomizeDisplay(nbOfRenders);
			nbOfRenders++
			console.log(nbOfRenders);
			
		}, 1500); //the time out is useless...once inside it is the render that dictates the number/s of renders */

		// var count = 0;

		useEffect(() => {
			// console.log(`count = ${count}`);
			let innerCount = count + 1/4;
			const controller = new AbortController();
			const interval = setInterval(()=> {
				// console.log("been called! " + jobRef.current?.innerText);
				// if (jobRef.current?.innerText === jobs[0]) {
					/* const nestedInterval = setInterval(()=>{
						var randomIteratedDisplay = jobs[1]
							.split("")
							.map((letter, index) => {
								if (index < 4) {
									return jobs[1][index];
								}
								return letters[Math.floor(Math.random()*26)];
							})
							.join("");
					if (jobRef.current !=null) jobRef.current.innerText = randomIteratedDisplay;
					clearInterval(nestedInterval);
					},30);  */
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
				// } else if (jobRef.current && jobRef.current.innerText === jobs[1]) {
					// setDisplayJob(jobs[0]);
				// }
			setCount(innerCount);
			}, 80)
			return () => {clearInterval(interval);controller.abort();}
		}, [displayJob]) // need the displayJob in the dependencie array to break the initial loop of set intervalle and rebuild the useEffect each time
	return(
		<h1>I am a <span ref={jobRef} className={styles.emphasized}>{displayJob}</span></h1>
	)
}
export default DescriptionHeader;