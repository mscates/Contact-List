import React, { useState } from "react"
import ContactForm from "./ContactForm"
import uuid from "react-uuid"
import { data } from "./FakeData"
import Letters from "./Letters"
import styles from "./Contacts.module.css"
import ContactsCategory from "../components/ContactsCategory"

const Contacts = () => {
  const [contacts, setContact] = useState(data())
  const [showForm, setShowForm] = useState(false)

  const addContact = (contact) => {
    const searchLetter = contact.lastName.charAt(0).toUpperCase()
    const newContact = { ...contact, id: uuid() }
    const existingContacts = contacts[searchLetter] || []
    setContact({
      ...contacts,
      [searchLetter]: [...existingContacts, newContact],
    })
  }

  const renderContacts = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    const displayItem = letters.map((letter) => {
      if (contacts.hasOwnProperty(letter)) {
        return <ContactsCategory contacts={contacts} letter={letter} />
      }
    })

    return <div>{displayItem}</div>
  }

  const handleShowForm = () => {
    setShowForm({ showForm: true })
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.searchContainer}>
        <h1 className={styles.title}>Contacts</h1>
        <div onClick={handleShowForm} className={styles.add}>
          Add Contact
        </div>
      </div>
      <div className={styles.letterContainer}>
        <div className={styles.contactGroup}>
          {showForm ? <ContactForm addContact={addContact} /> : null}
          {renderContacts()}
        </div>
        <Letters contacts={contacts} />
      </div>
    </div>
  )
}

export default Contacts
