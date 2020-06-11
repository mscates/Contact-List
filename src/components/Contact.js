import React from "react"

const Contact = ({ contacts }) => {
  return (
    <div>
      {contacts.map((contact) => (
        <h2>{`Name: ${contact.firstName} ${contact.lastName}`}</h2>
      ))}
    </div>
  )
}

export default Contact
