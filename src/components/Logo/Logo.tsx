import styles from "./Logo.module.css";

const Logo = () => {
	return (
		<div className={styles.logoContainer}>
			<span>Andraina</span>
			<span className={styles.boldGreen}>.</span>
		</div>
		)
}

export default Logo;