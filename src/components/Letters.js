import React from "react"
import styles from "./Letters.module.css"
import PropTypes from "prop-types"

const Letters = ({ contacts }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

  return (
    <div>
      {letters.map((letter, id) => (
        <div
          key={id}
          className={
            contacts[letter].length !== 0
              ? styles.letterBlack
              : styles.letterGray
          }
        >
          {letter}
        </div>
      ))}
    </div>
  )
}

Letters.propTypes = {
  contacts: PropTypes.object.isRequired,
}

export default Letters
