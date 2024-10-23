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
		const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		const jobs = ["front end web designer", "free lancer"];
		const [displayJob, setDisplayJob] = useState(jobs[1]);
		const jobRef = useRef<HTMLSpanElement>(null);
		//

		useEffect(() => {
			const controller = new AbortController();
			const interval = setInterval(()=>{
				console.log("been called! " + jobRef.current?.innerText);
				if (jobRef.current?.innerText === jobs[0]) {
					jobRef.current.innerText = jobs[1];
				} else if (jobRef.current && jobRef.current.innerText === jobs[1]) {
					jobRef.current.innerText = jobs[0];
				}
			},3000)
			return () => controller.abort();
		}, [])
	return(
		<h1>I am a <span ref={jobRef} className={styles.emphasized}>{displayJob}</span></h1>
	)
}
export default DescriptionHeader;