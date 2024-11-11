import styles from "./CardContainer.module.css";

interface props {
	title: string;
	description: string;
}

const CardContainer = ({ title, description }: props) => {
	return (
	<article className={styles.card}>
		<header>
			{<h2>{title}</h2>}
		</header>
		<div className={styles.description}>
			{description}
		</div>
		<div>
			Here the list of used technologies
		</div>
	</article>)
}
export default CardContainer;