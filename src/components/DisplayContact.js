import React from "react"
import styles from "./DisplayContact.module.css"
import Button from "./Button"

const DisplayContact = ({
  currentContact: { id, firstName, lastName },
  closeContact,
  deleteContact,
  editCurrentContact,
}) => (
  <div className={styles.container}>
    <Button handleClick={closeContact} text="Close" />
    <h2>
      {firstName} {lastName}
    </h2>
    <Button handleClick={() => deleteContact(id, lastName)} text="Delete" />
    <Button handleClick={() => editCurrentContact()} text="Edit" />
  </div>
)

export default DisplayContact
