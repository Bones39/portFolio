/* https://www.youtube.com/watch?v=LyLa7dU5tp8&t=450s
 */

import { ReactNode } from "react";
import styles from "./Modal2.module.css";
import ReactDOM from "react-dom";

interface Props {
	children: ReactNode;
	open: boolean;
	onClose: () => void;
}

const Modal2 = ({children, open, onClose}: Props) => {
	if (!open) {
		return null
	}
	return ReactDOM.createPortal(
		<div>
			<div className={styles.modal}>
				<button onClick={onClose}>Close</button>
				{children}
			</div>
		</div>,
		document.body
	)
}
export default Modal2;