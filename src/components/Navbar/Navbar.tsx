import { Button, List, ListItem, Box } from "@chakra-ui/react";
import styles from "./Navbar.module.css";

const Navbar = () => {
	return (
		<div className={styles.navBarContainer}>
			{/* <div className={styles.navButton}><a href="https://example.com">Click Me</a></div> */}
			<button className={styles.navButton}>Home</button>
			<button className={styles.navButton}>Work</button>
			<button className={styles.navButton}>Contact</button>
	{/* 		<button>Home</button>
			<button>Work</button>
			<button>Contact</button> */}
		</div>
		// <Box width='100%'>
		// 	<List display="flex" justifyContent="end">
		// 		<ListItem>
		// 			<Button variant="link" className={[styles.navButton, "jetBrainsFont"].join(" ")}>Home</Button>
		// 			{/* <button >Home</button> */}
		// 		</ListItem>
		// 		<ListItem>
		// 			<Button variant="link" paddingInline="50px" className={[styles.navButton, "jetBrainsFont"].join(" ")}>Work</Button>
		// 		</ListItem>
		// 		<ListItem>
		// 			<Button variant="link" paddingInline="50px">Contact</Button>
		// 		</ListItem>
		// 	</List>
		// </Box>
	)
}

export default Navbar;