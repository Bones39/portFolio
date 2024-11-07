import CardContainer from "../CardContainer/CardContainer";
import styles from "./CardList.module.css";

/* Responsive flexbox: https://www.youtube.com/watch?v=S0a7PEOi0do 
https://www.youtube.com/watch?v=wsTv9y931o8
*/

const CardList = () => {
	return (
		<section className={styles.cardList}>
			<CardContainer></CardContainer>
			<CardContainer></CardContainer>
			<CardContainer></CardContainer>
		</section>
	)
}
export default CardList;