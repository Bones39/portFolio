import { useState } from "react";
import styles from "./CardContainer.module.css";
import Modal from "../Modal/Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFontAwesome, faReact, faBootstrap } from '@fortawesome/free-brands-svg-icons'
import IconTags from "../IconTags/IconTags";
import Modal2 from "../Modal/Modal2";
import GameOfLife from '../GameOfLife/GameOfLife';
import GameOfLife2 from "../GameOfLife/GameOfLife2";
import ZoomableContent from "../GameOfLife/ZoomableContent";
import FlexModal from "../Modal/Modal3";
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

interface props {
	title: string;
	description: string;
	usedTechnologies: string[];
}

const CardContainer = ({ title, description, usedTechnologies }: props) => {

	const [isOpen, setIsOpen] = useState(false);

/* 	const toggleModal = () => {
		setModal(!modal);
	  }; */

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
			<Modal2 open={isOpen} onClose={() => setIsOpen(false)} title={title}>
				{/* <GameOfLife2/> */}
				{/* <ZoomableContent/> */}
				<FlexModal></FlexModal>
			</Modal2>
		</>
	)
}
export default CardContainer;