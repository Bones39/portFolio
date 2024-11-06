import styles from "./CardContainer.module.css";

const CardContainer = () => {
	return (
		<article className={styles.card}>
		<header>
			<p>Maybe an little icon</p>
			<h2>Title of the project</h2>
		</header>
		<div>
			Here goes a description of the project
		</div>
		<div>
			Here the list of used technologies
		</div>
	</article>)
}
export default CardContainer;