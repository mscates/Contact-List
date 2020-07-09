import React from "react"
import styles from "./DisplayContact.module.css"

const DisplayContact = ({
  currentContact: { firstName, lastName },
  closeContact,
}) => {
  return (
    <div className={styles.container}>
      <button onClick={closeContact}>X</button>
      <h2>
        {firstName} {lastName}
      </h2>
    </div>
  )
}

export default DisplayContact
