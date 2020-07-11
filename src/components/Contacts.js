import React, { useState } from "react"
import uuid from "react-uuid"
import { data, contactData } from "./FakeData"
import Letters from "./Letters"
import styles from "./Contacts.module.css"
import ContactsCategory from "../components/ContactsCategory"
import Modal from "../components/Modal"
import DisplayContact from "../components/DisplayContact"

const Contacts = () => {
  const [contacts, setContact] = useState(data(contactData()))
  const [modalProps, setModalProps] = useState("Add Contact")
  const [displayContact, setDisplayContact] = useState(false)
  const [currentContact, setCurrentContact] = useState()
  const [showAddContact, setShowAddContact] = useState(false)

  const addContact = (contact) => {
    const searchLetter = contact.lastName.charAt(0).toUpperCase()
    const newContact = { ...contact, id: uuid() }
    const existingContacts = contacts[searchLetter] || []
    setContact({
      ...contacts,
      [searchLetter]: [...existingContacts, newContact],
    })
  }

  const deleteContact = (id, lastName) => {
    const firstInitial = lastName.charAt(0).toUpperCase()
    setContact({
      ...contacts,
      [firstInitial]: contacts[firstInitial].filter((item) => item.id !== id),
    })
    setDisplayContact(false)
  }

  const showContact = (id, lastName) => {
    const firstInitial = lastName.charAt(0).toUpperCase()
    setDisplayContact(true)
    setShowAddContact(false)
    setCurrentContact(
      contacts[firstInitial].filter((item) => item.id === id)[0]
    )
  }

  const closeContact = () => {
    setDisplayContact(false)
    setShowAddContact(true)
  }

  const renderContacts = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    const displayItem = letters.map((letter) => {
      if (contacts.hasOwnProperty(letter)) {
        return (
          <ContactsCategory
            showContact={showContact}
            contacts={contacts}
            key={letter}
            letter={letter}
          />
        )
      }
    })

    return <div>{displayItem}</div>
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.searchContainer}>
        <h1 className={styles.title}>Contacts</h1>
        <Modal
          modalProps={modalProps}
          showAddContact={showAddContact}
          addContact={addContact}
        />
      </div>
      <div className={styles.letterContainer}>
        <div className={styles.contactGroup}>
          {displayContact ? (
            <DisplayContact
              showAddContact={showAddContact}
              closeContact={closeContact}
              currentContact={currentContact}
              deleteContact={deleteContact}
            />
          ) : (
            renderContacts()
          )}
        </div>
        <Letters contacts={contacts} />
      </div>
    </div>
  )
}

export default Contacts
