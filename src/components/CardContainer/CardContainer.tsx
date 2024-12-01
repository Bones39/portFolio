import { useState } from "react";
import styles from "./CardContainer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFontAwesome, faReact, faBootstrap } from '@fortawesome/free-brands-svg-icons'
import IconTags from "../IconTags/IconTags";
import ModalWindow from "../Modal/ModalWindow";
import GameOfLife from "../Modal/GameOfLife";
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

interface props {
	title: string;
	description: string;
	usedTechnologies: string[];
}

const CardContainer = ({ title, description, usedTechnologies }: props) => {

	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<article className={styles.card} onClick={() => setIsOpen(true)}>
				<header>
					{<h2 onClick={() => setIsOpen(true)}>{title}</h2>}
				</header>
				<div className={styles.description}>
					{description}
				</div>
				<IconTags iconNames={usedTechnologies}></IconTags>
			</article>
			<ModalWindow open={isOpen} onClose={() => setIsOpen(false)} title={title}>
				{/* <GameOfLife2/> */}
				{/* <ZoomableContent/> */}
				<GameOfLife></GameOfLife>
			</ModalWindow>
		</>
	)
}
export default CardContainer;