import React from "react"
import "../components/Contact"
import styles from "./Contacts.module.css"
import Contact from "../components/Contact"

const ContactsCategory = ({ contacts, letter }) => {
  return (
    <div key={letter}>
      <div
        className={
          contacts[letter].length !== 0
            ? [styles.letters]
            : [styles.lettersHidden]
        }
      >
        {letter}
      </div>
      {contacts[letter].map((contact) => {
        return (
          <div className={styles.contact} key={contact.id}>
            <Contact contact={contact} />
          </div>
        )
      })}
    </div>
  )
}

export default ContactsCategory
