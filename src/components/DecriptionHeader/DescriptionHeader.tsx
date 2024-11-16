// I am front end web designer/side project builder/ free lancer
// I was a technico fonctionnal consultant/ mechanical engineer
// utiliser l'effet de hyperplexed sur le hacking
// https://www.youtube.com/watch?v=W5oawMJaXbU
// mettre les emphasized clickable -> was renvoit au experience passées et le job renvoie aux projets qui ont été faits
import { useEffect, useRef, useState } from "react";
import styles from "./DescriptionHeader.module.css";

const DescriptionHeader = () => {
		const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		const jobs = ["front end designer", "free lancer", "Consultant", "Engineer"];
		const [innerDisplayJob, setInnerDisplayJob] = useState("");
		const [index, setIndex] = useState(0);

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
				// keep rendering as long as the last iteration is not reached or the word is not back to initial
				if (nbIterationPerLetter <= initialWord.length -1 + 1/4) {
					// increment each time the word is fully computed
					setNbIterationPerLetter( nbIterationPerLetter + 1/4);
					// set the state of the field to display to rerender the component each time the whole word is computed
					setInnerDisplayJob(randomIteratedDisplay);
					// console.log(`back to initial word ${(randomIteratedDisplay === initialWord)} ${nbIterationPerLetter}`);
					// on the last iteration, set a time out to change the initial word and reset the random iteration cycle
					/** Careful, here nbIterationPerLetter has not been iterated yet because the rerender is not done yet, that is why we account for the expected future value in the condition*/
					if (nbIterationPerLetter + 1/4 === initialWord.length -1 + 1/4) {
						let timeOut = setTimeout(() => {
							// console.log(`back to initial word, index need to be changed to rerender again with a new initial word`);
							// back to initial word, index need to be changed to rerender again with a new initial word, and reset interanl variable
							setNbIterationPerLetter(0);
							setIndex((index + 1) % jobs.length);
							clearInterval(interval);
							clearTimeout(timeOut);
						}, 5000);
					}
				}
				// clear the intervalle each time the word is fully rendered
				return clearInterval(interval);
			}, 35);
		}, [innerDisplayJob, index])
	return(
		<h1>I am a <span className={styles.emphasized}>{innerDisplayJob}</span></h1>
	)
}
export default DescriptionHeader;