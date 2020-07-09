import React from "react"
import styles from "./ModalTrigger.module.css"

const ModalTrigger = ({ triggerText, showModal, addShowContact }) => {
  return (
    <button onClick={showModal} className={styles.add}>
      {triggerText}
    </button>
  )
}

export default ModalTrigger
