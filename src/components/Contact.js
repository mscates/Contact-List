import React from "react"

const Contact = ({ contact: { id, firstName, lastName }, showContact }) => {
  return (
    <div>
      <h4 onClick={() => showContact(id, lastName)}>
        {firstName} {lastName}
      </h4>
    </div>
  )
}

export default Contact
