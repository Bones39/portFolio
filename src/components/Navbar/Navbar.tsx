import styles from "./Navbar.module.css";

const Navbar = () => {
	return (
		<div className={styles.navBarContainer}>
			<div><a className={styles.navButton} href="https://example.com">Home</a></div>
			<div><a className={styles.navButton} href="https://example.com">Work</a></div>
			<div><a className={styles.navButton} href="https://example.com">Contact</a></div>
		</div>
	)
}

export default Navbar;