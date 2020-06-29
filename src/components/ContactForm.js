import React, { useState } from "react"
import styles from "./ContactForm.module.css"

const ContactForm = ({ addContact }) => {
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
          value={contactName.firstName}
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
          value={contactName.lastName}
          onChange={handleChange}
          name="lastName"
        />
      </div>
      <button className={styles.formButton}>Submit</button>
    </form>
  )
}

export default ContactForm
