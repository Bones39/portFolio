import { useState } from "react";
import styles from "./CardContainer.module.css";
import Modal from "../Modal/Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFontAwesome, faReact } from '@fortawesome/free-brands-svg-icons'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

interface props {
	title: string;
	description: string;
}

const CardContainer = ({ title, description }: props) => {

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
					<FontAwesomeIcon icon={faReact}/>
					React
				</div>
			</article>

			{modal && (<Modal modal={modal} toggleModal={toggleModal}></Modal>)}
		</>
	)
}
export default CardContainer;