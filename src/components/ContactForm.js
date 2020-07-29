import React, { useState } from "react"
import styles from "./ContactForm.module.css"
import Button from "./Button"
import PropTypes from "prop-types"

const ContactForm = ({ addContact, removeForm, handleShowForm }) => {
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
      <Button className={styles.formButton} type="submit" text="Submit" />
      <Button handleClick={removeForm} text="Cancel" />
    </form>
  )
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  removeForm: PropTypes.func.isRequired,
  handleShowForm: PropTypes.func.isRequired,
}

export default ContactForm
