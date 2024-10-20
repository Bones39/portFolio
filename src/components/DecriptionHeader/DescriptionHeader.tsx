// I am front end web designer/side project builder/ free lancer
// I was a technico fonctionnal consultant/ mechanical engineer
// utiliser l'effet de hyperplexed sur le hacking
// https://www.youtube.com/watch?v=W5oawMJaXbU
// mettre les emphasized clickable -> was renvoit au experience passées et le job renvoie aux projets qui ont été faits
import styles from "./DescriptionHeader.module.css";

interface Props {
	displayedJob: string;
}

const DescriptionHeader = ({displayedJob}: Props) => {
	return(
		<h1>I am a <span className={styles.emphasized}>{displayedJob}</span></h1>
	)
}
export default DescriptionHeader;