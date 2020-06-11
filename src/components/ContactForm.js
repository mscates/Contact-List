import React, { useState } from "react"

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
      <label htmlFor="firstName">
        First Name:
        <input
          id="firstName"
          value={contactName.firstName}
          onChange={handleChange}
          name="firstName"
        />
      </label>
      <br />
      <label htmlFor="lastName">
        Last Name:
        <input
          id="lastName"
          value={contactName.lastName}
          onChange={handleChange}
          name="lastName"
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  )
}

export default ContactForm
