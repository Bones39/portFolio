import { useState } from "react";
import styles from "./CardContainer.module.css";
import Modal from "../Modal/Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFontAwesome, faReact, faBootstrap } from '@fortawesome/free-brands-svg-icons'
import IconTags from "../IconTags/IconTags";
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

interface props {
	title: string;
	description: string;
	usedTechnologies: string[];
}

const CardContainer = ({ title, description, usedTechnologies }: props) => {

	const [modal, setModal] = useState(false);

	const toggleModal = () => {
		setModal(!modal);
	  };

	return (
		<>
			<article className={styles.card} onClick={() => toggleModal()}>
				<header>
					{<h2>{title}</h2>}
				</header>
				<div className={styles.description}>
					{description}
				</div>
				<div className={styles.iconTag}>
					<i className={styles.icon}>
						<FontAwesomeIcon icon={faReact}/>
					</i>
					<span className={styles.iconName}>
						React
					</span>
				</div>
				<IconTags iconNames={usedTechnologies}></IconTags>
			</article>

			{modal && (<Modal modal={modal} toggleModal={toggleModal}></Modal>)}
		</>
	)
}
export default CardContainer;