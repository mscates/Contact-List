import React from "react"

const Contact = ({ contact: { id, firstName, lastName }, deleteContact }) => {
  return (
    <div>
      <h2 onClick={() => deleteContact(id, lastName)}>
        {firstName} {lastName}
      </h2>
    </div>
  )
}

export default Contact
