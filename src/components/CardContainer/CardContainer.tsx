import { useState } from "react";
import styles from "./CardContainer.module.css";
import Modal from "../Modal/Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFontAwesome, faReact, faBootstrap } from '@fortawesome/free-brands-svg-icons'
import IconTags from "../IconTags/IconTags";
import Modal2 from "../Modal/Modal2";
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

interface props {
	title: string;
	description: string;
	usedTechnologies: string[];
}

const CardContainer = ({ title, description, usedTechnologies }: props) => {

	const [modal, setModal] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

/* 	const toggleModal = () => {
		setModal(!modal);
	  }; */

	return (
		<>
			<article className={styles.card}>
				<header>
					{<h2 onClick={() => setIsOpen(true)}>{title}</h2>}
				</header>
				<div className={styles.description}>
					{description}
				</div>
				<IconTags iconNames={usedTechnologies}></IconTags>
				<Modal2 open={isOpen} onClose={() => setIsOpen(false)}>
					fancy modal
				</Modal2>
			</article>

			{/* {modal && (<Modal modal={modal} toggleModal={toggleModal}></Modal>)} */}
		</>
	)
}
export default CardContainer;