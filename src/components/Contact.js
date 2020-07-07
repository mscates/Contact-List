import React from "react"

const Contact = ({ contact: { id, firstName, lastName }, showContact }) => {
  return (
    <div>
      <h2 onClick={() => showContact(id, lastName)}>
        {firstName} {lastName}
      </h2>
    </div>
  )
}

export default Contact
