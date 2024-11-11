import CardContainer from "../CardContainer/CardContainer";
import styles from "./CardList.module.css";
import projectsDescription from "../ProjectDescription/ProjectDescription";

/* Responsive flexbox: https://www.youtube.com/watch?v=S0a7PEOi0do 
https://www.youtube.com/watch?v=wsTv9y931o8
*/

const CardList = () => {
	return (
		<section className={styles.cardList}>
			<CardContainer title={projectsDescription.gameOfLife.title} description={projectsDescription.gameOfLife.description}></CardContainer>
			<CardContainer title={projectsDescription.jellyCar.title} description={projectsDescription.jellyCar.description}></CardContainer>
			<CardContainer title={projectsDescription.gameHub.title} description={projectsDescription.gameHub.description}></CardContainer>
		</section>
	)
}
export default CardList;