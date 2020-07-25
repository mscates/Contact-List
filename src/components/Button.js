import React from "react"

const Button = ({ type = "button", handleClick, text }) => {
  return (
    <button type={type} onClick={handleClick}>
      {text}
    </button>
  )
}

export default Button
