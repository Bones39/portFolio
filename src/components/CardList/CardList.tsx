import CardContainer from "../CardContainer/CardContainer";
import styles from "./CardList.module.css";
import projectsDescription from "../ProjectDescription/ProjectDescription";

/* Responsive flexbox: https://www.youtube.com/watch?v=S0a7PEOi0do 
https://www.youtube.com/watch?v=wsTv9y931o8
*/

const CardList = () => {
	return (
		<section className={styles.cardList}>
			<CardContainer title={projectsDescription.gameOfLife.title} description={projectsDescription.gameOfLife.description} usedTechnologies={projectsDescription.gameOfLife.usedTechnologies} url={projectsDescription.gameOfLife.url}></CardContainer>
			<CardContainer title={projectsDescription.superchat.title} description={projectsDescription.superchat.description} usedTechnologies={projectsDescription.superchat.usedTechnologies} url={projectsDescription.superchat.url}></CardContainer>
			<CardContainer title={projectsDescription.gameHub.title} description={projectsDescription.gameHub.description} usedTechnologies={projectsDescription.gameHub.usedTechnologies} url={projectsDescription.gameHub.url}></CardContainer>
		</section>
	)
}
export default CardList;