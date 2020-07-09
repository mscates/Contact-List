import React, { useState } from "react"
import ModalContent from "../components/ModalContent"
import ModalTrigger from "../components/ModalTrigger"

const Modal = ({ modalProps, addContact, showAddContact }) => {
  const [isShown, setIsShown] = useState(false)

  return (
    <>
      {showAddContact ? (
        <ModalTrigger
          showModal={() => setIsShown(true)}
          showAddContact={showAddContact}
          triggerText={modalProps}
        />
      ) : null}
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
