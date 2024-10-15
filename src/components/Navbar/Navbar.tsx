import { Button, List, ListItem, Box } from "@chakra-ui/react";
import styles from "./Navbar.module.css";

const Navbar = () => {
	return (
		<div className="jetbrains-mono-NavBar">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, minima.</div>
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