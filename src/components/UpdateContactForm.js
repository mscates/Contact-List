import React, { useState } from "react"
import styles from "./ContactForm.module.css"
import Button from "./Button"
import PropTypes from "prop-types"

const UpdateContactForm = ({
  currentContact,
  removeForm,
  handleUpdateContact,
}) => {
  const [updateName, setUpdateName] = useState({
    firstName: currentContact.firstName,
    lastName: currentContact.lastName,
    id: currentContact.id,
  })

  const handleChange = (e) => {
    const { value, name } = e.target
    setUpdateName({
      ...updateName,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleUpdateContact(updateName, currentContact)
    setUpdateName({ firstName: "", lastName: "" })
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
          value={updateName.firstName}
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
          value={updateName.lastName}
          onChange={handleChange}
          name="lastName"
        />
      </div>
      <Button className={styles.formButton} type="submit" text="Update" />
      <Button handleClick={removeForm} text="Cancel" />
    </form>
  )
}

UpdateContactForm.propTypes = {
  currentContact: PropTypes.object.isRequired,
  removeForm: PropTypes.func.isRequired,
  handleUpdateContact: PropTypes.func.isRequired,
}

export default UpdateContactForm
