import React from "react"
import PropTypes from "prop-types"

const Contact = ({ contact: { id, firstName, lastName }, showContact }) => {
  return (
    <div>
      <h4 onClick={() => showContact(id, lastName)}>
        {firstName} {lastName}
      </h4>
    </div>
  )
}

Contact.propTypes = {
  firstName: PropTypes.string,

  showContact: PropTypes.func.isRequired,
}

export default Contact
