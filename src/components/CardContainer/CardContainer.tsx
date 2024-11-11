import { useState } from "react";
import styles from "./CardContainer.module.css";
import Modal from "../Modal/Modal";

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
				<div>
					Here the list of used technologies
				</div>
			</article>

			{modal && (<Modal modal={modal} toggleModal={toggleModal}></Modal>)}
		</>
	)
}
export default CardContainer;