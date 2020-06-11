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

// Hi Michael,  I am trying to add the ability to hover over each letter and
// display the number of contacts in the array of each letter.  What I have so
// far is not working since it does show as I hover the correct amount,
// but the amounts all come back if I hover over another letter.  I don't
// know how to only show and hide the contacts for a single letter.  I don't
// need you to code up the answer.  I would prefer for you to give some hints
// as to how I should proceed.  You know I like the struggle.  It helps me get
// better.  No rush, whenever you have time.
