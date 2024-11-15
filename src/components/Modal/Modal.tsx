import styles from "./Modal.module.css";
import ReactDOM from "react-dom";

/* create a modal component: https://www.youtube.com/watch?v=9DwGahSqcEc */

interface Props {
    modal: boolean;
    toggleModal: () => void;
}

const Modal = ({modal, toggleModal}: Props) => {

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return ReactDOM.createPortal(
    <>
      {<div className={styles.modal}>
          <div onClick={()=>toggleModal()} className={styles.overlay}></div>
          <div className={styles["modal-content"]}>
            <h2>Hello Modal</h2>
            <p>
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
              id fugit, dignissimos maxime non natus placeat illo iusto!
              Sapiente dolorum id maiores dolores? Illum pariatur possimus
              quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
              placeat tempora vitae enim incidunt porro fuga ea. */}
            </p>
            <button className={styles["close-modal"]} onClick={()=>toggleModal()}>
              CLOSE
            </button>
          </div>
        </div>}
    </>, document.getElementById("portal") || document.body

  );
}

export default Modal;