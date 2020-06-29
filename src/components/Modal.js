import React, { useState } from "react"
import ModalContent from "../components/ModalContent"
import ModalTrigger from "../components/ModalTrigger"

const Modal = ({ modalProps, addContact }) => {
  const [isShown, setIsShown] = useState(false)

  return (
    <>
      <ModalTrigger
        showModal={() => setIsShown(true)}
        triggerText={modalProps}
      />
      {isShown ? (
        <ModalContent
          addContact={addContact}
          closeModal={() => setIsShown(false)}
        />
      ) : null}
    </>
  )
}

export default Modal
