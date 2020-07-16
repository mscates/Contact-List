import React from "react"
import "../components/Contact"
import styles from "./Contacts.module.css"
import Contact from "../components/Contact"

const ContactsCategory = ({ contacts, letter, showContact }) => {
  return (
    <div
      className={
        contacts[letter].length === 0
          ? [styles.lettersHidden]
          : [styles.contactContainer]
      }
      key={letter}
    >
      <div className={styles.letters}>{letter}</div>
      {contacts[letter].map((contact) => {
        return (
          <div className={styles.contact} key={contact.id}>
            <Contact showContact={showContact} contact={contact} />
          </div>
        )
      })}
    </div>
  )
}

export default ContactsCategory
