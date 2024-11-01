// I am front end web designer/side project builder/ free lancer
// I was a technico fonctionnal consultant/ mechanical engineer
// utiliser l'effet de hyperplexed sur le hacking
// https://www.youtube.com/watch?v=W5oawMJaXbU
// mettre les emphasized clickable -> was renvoit au experience passées et le job renvoie aux projets qui ont été faits
import { useEffect, useRef, useState } from "react";
import styles from "./DescriptionHeader.module.css";

/* interface Props {
	displayJob: string;
	changeIndex: boolean;
	setChangeIndex: (changeIndex: boolean) => void;
	setInnerDisplayJob: (displayJob: string) => void;
	innerDisplayJob: string;
} */

const DescriptionHeader = () => {
		const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		const jobs = ["front end web designer", "free lancer", "Consultant", "Engineer"];
		const [innerDisplayJob, setInnerDisplayJob] = useState("");
		const [index, setIndex] = useState(0);
		const jobRef = useRef<HTMLSpanElement>(null);

		const [nbIterationPerLetter, setNbIterationPerLetter] = useState(0);
		
		useEffect(() => {
			// console.log(`rendered with initial word: ${jobs[index]}, nbIterationPerLetter: ${nbIterationPerLetter}`);
			const interval = setInterval(()=> {
				var initialWord = jobs[index];
				// generate a random string sequence to display
				var randomIteratedDisplay = initialWord
					.split("")
					.map((letter, innerIndex) => {
						if (innerIndex < nbIterationPerLetter) {
							// return the correct letter
							return initialWord[innerIndex];
						}
						// return a random letter
						return letters[Math.floor(Math.random()*52)];
					}) 
					.join("");
				// keep endering as long as the last iteration is not reached and the word is not back to initial
				if (nbIterationPerLetter <= initialWord.length -1 + 1/4) {
					// increment each time the word is fully computed
					setNbIterationPerLetter( nbIterationPerLetter + 1/4);
					// set the state of the field to display to rerender the component each time the whole word is computed
					setInnerDisplayJob(randomIteratedDisplay);
					// console.log(`back to initial word ${(randomIteratedDisplay === initialWord)} ${nbIterationPerLetter}`);
					// on the last iteration, set a time out to change the initial word and reset the random iteration cycle
					if (nbIterationPerLetter === initialWord.length -1 + 1/4) {
						setTimeout(() => {
							console.log(`back to initial word, index need to be changed to rerender again with a new initial word`);
							// back to initial word, index need to be changed to rerender again with a new initial word, and reset interanl variable
							setNbIterationPerLetter(0);
							setIndex((index + 1) % jobs.length);
							clearInterval(interval);
						}, 5000);
					}
				}
				// clear the intervalle each time the word is fully rendered
				return clearInterval(interval);
			}, 50);
		}, [innerDisplayJob, index]) // need the displayJob in the dependencie array to break the initial loop of set intervalle and rebuild the useEffect each time
	return(
		<h1>I am a <span ref={jobRef} className={styles.emphasized}>{innerDisplayJob}</span></h1>
	)
}
export default DescriptionHeader;