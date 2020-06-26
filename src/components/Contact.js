import React from "react"

const Contact = ({ contact }) => {
  return (
    <div>
      <h2>
        {contact.firstName} {contact.lastName}
      </h2>
    </div>
  )
}

export default Contact
