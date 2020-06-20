import React, { useState } from "react"
import ContactForm from "./ContactForm"
import uuid from "react-uuid"
import { data, letterData } from "./FakeData"
import Letters from "./Letters"
import styles from "./Contacts.module.css"

const Contacts = () => {
  const [contacts, setContact] = useState(data())

  const addContact = (contact) => {
    const searchLetter = contact.lastName.charAt(0).toUpperCase()
    const newContact = { ...contact, id: uuid() }
    setContact([...contacts, newContact])
    // const existingContacts = letterContacts[searchLetter] || []
    // setLetterContacts({
    //   ...letterContacts,
    //   [searchLetter]: [...existingContacts, newContact],
    // })
  }

  const renderContacts = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    const displayItem = letters.map((letter) => {
      if (contacts.hasOwnProperty(letter)) {
        return (
          <div key={letter}>
            <div className={styles.letters}>
              {contacts[letter].length !== 0 ? letter : null}
            </div>
            {contacts[letter].map((contact) => {
              return (
                <div key={contact.id}>
                  {contact.firstName} {contact.lastName}
                </div>
              )
            })}
          </div>
        )
      }
    })

    return <div>{displayItem}</div>
  }

  const handleShowForm = () => {}

  return (
    <div className={styles.mainContainer}>
      <div className={styles.searchContainer}>
        <h1>Contacts</h1>
        <div className={styles.add}>+</div>

        {/* <ContactForm addContact={addContact} /> */}
      </div>
      <div className={styles.letterContainer}>
        {renderContacts()}
        <Letters contacts={contacts} />
      </div>
    </div>
  )
}

export default Contacts
