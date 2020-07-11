import React from "react"
import styles from "./DisplayContact.module.css"

const DisplayContact = ({
  currentContact: { id, firstName, lastName },
  closeContact,
  deleteContact,
  editContact,
}) => (
  <div className={styles.container}>
    <button onClick={closeContact}>X</button>
    <h2>
      {firstName} {lastName}
    </h2>
    <button onClick={() => deleteContact(id, lastName)}>Delete</button>
    <button onClick={() => editContact(id, lastName)}>Edit</button>
  </div>
)

export default DisplayContact
