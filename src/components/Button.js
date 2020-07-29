import React from "react"
import PropTypes from "prop-types"

const Button = ({ type = "button", handleClick, text }) => {
  return (
    <button type={type} onClick={handleClick}>
      {text}
    </button>
  )
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}

export default Button
