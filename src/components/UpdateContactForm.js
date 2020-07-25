import React, { useState } from "react"
import styles from "./ContactForm.module.css"
import Button from "./Button"

const ContactForm = ({
  currentContact,
  addContact,
  removeForm,
  handleShowForm,
}) => {
  const [contactName, setContactName] = useState({
    firstName: "",
    lastName: "",
  })

  const handleChange = (e) => {
    const { value, name } = e.target
    setContactName({
      ...contactName,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addContact(contactName)
    setContactName({ firstName: "", lastName: "" })
    handleShowForm(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formItem}>
        <label className={styles.formLabel} htmlFor="firstName">
          First Name:
        </label>
        <input
          className={styles.formInput}
          id="firstName"
          value={currentContact.firstName}
          onChange={handleChange}
          name="firstName"
        />
      </div>
      <div className={styles.formItem}>
        <label className={styles.formLabel} htmlFor="lastName">
          Last Name:
        </label>
        <input
          className={styles.formInput}
          id="lastName"
          value={currentContact.lastName}
          onChange={handleChange}
          name="lastName"
        />
      </div>
      <Button className={styles.formButton} type="submit" text="Submit" />
      <Button handleClick={removeForm} text="Cancel" />
    </form>
  )
}

export default ContactForm
