import React from "react"
import ReactDOM from "react-dom"
import styles from "./ModalContent.module.css"
import ContactForm from "./ContactForm"

const ModalContent = ({ closeModal, addContact }) => {
  return ReactDOM.createPortal(
    <aside className="modal-cover">
      <div className="modal-area">
        <button onClick={closeModal} className={styles.modalClose}>
          <span className={styles.hideVisual}>Close</span>
          <svg className={styles.modalCloseIcon} viewBox="0 0 40 40">
            <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
          </svg>
        </button>
        <div className={styles.modalBody}>
          <ContactForm addContact={addContact} />
        </div>
      </div>
    </aside>,

    document.body
  )
}

export default ModalContent
