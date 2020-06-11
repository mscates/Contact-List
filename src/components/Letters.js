import React, { useState } from "react"
import styles from "./Letters.module.css"

const Letters = (props) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  const [number, setNumber] = useState({})
  const [showNumber, setShowNumber] = useState(false)

  const showAmountLetters = (e) => {
    const newNumber = props.letterData[e.target.textContent]
      ? props.letterData[e.target.textContent].length
      : null
    setNumber({ ...number, [e.target.textContent]: newNumber })
    setShowNumber(true)
  }

  return (
    <div>
      {letters.map((letter, id) => (
        <div
          key={id}
          className={styles.letter}
          onMouseOver={showAmountLetters}
          onMouseLeave={() => setShowNumber(false)}
        >
          {letter}
          <div>{showNumber && number[letter]}</div>
        </div>
      ))}
    </div>
  )
}

export default Letters
