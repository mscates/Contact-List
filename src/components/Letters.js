import React from "react"
import styles from "./Letters.module.css"
import { data } from "./FakeData"

const Letters = ({ contacts }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  let letterData = data()

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

export default Letters
