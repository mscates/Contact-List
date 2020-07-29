import React, { useState } from "react"
import uuid from "react-uuid"
import { data, contactData } from "./FakeData"
import Letters from "./Letters"
import styles from "./Contacts.module.css"
import ContactsCategory from "../components/ContactsCategory"
import ContactForm from "../components/ContactForm"
import DisplayContact from "../components/DisplayContact"
import Button from "./Button"
import UpdateContactForm from "../components/UpdateContactForm"

const Contacts = () => {
  const [contacts, setContact] = useState(data(contactData()))
  const [showForm, setShowForm] = useState(false)
  const [displayContact, setDisplayContact] = useState(false)
  const [currentContact, setCurrentContact] = useState()
  const [showAddContact, setShowAddContact] = useState(true)
  const [editContact, setEditContact] = useState(false)

  const editCurrentContact = () => {
    setEditContact(true)
    setShowForm(false)
  }

  const addContact = (contact) => {
    const searchLetter = contact.lastName.charAt(0).toUpperCase()
    const newContact = { ...contact, id: uuid() }
    const existingContacts = contacts[searchLetter] || []
    setContact({
      ...contacts,
      [searchLetter]: [...existingContacts, newContact],
    })
  }

  const handleUpdateContact = (updatedContact, currentContact) => {
    const firstInitial = currentContact.lastName.charAt(0).toUpperCase()
    const targetArray = contacts[firstInitial]
    setContact({
      ...contacts,
      [firstInitial]: [
        ...targetArray.map((item) =>
          item.id === updatedContact.id ? updatedContact : item
        ),
      ],
    })
  }

  const deleteContact = (id, lastName) => {
    const firstInitial = lastName.charAt(0).toUpperCase()
    setContact({
      ...contacts,
      [firstInitial]: contacts[firstInitial].filter((item) => item.id !== id),
    })
    setDisplayContact(false)
    setShowAddContact(true)
  }

  const showContact = (id, lastName) => {
    const firstInitial = lastName.charAt(0).toUpperCase()
    setDisplayContact(true)
    setShowAddContact(false)
    setCurrentContact(
      contacts[firstInitial].filter((item) => item.id === id)[0]
    )
  }

  const handleShowForm = () => {
    setShowForm(true)
  }

  const removeForm = () => {
    console.log("remove form")
    setShowForm(false)
    setEditContact(false)
  }

  const closeContact = () => {
    setDisplayContact(false)
    setShowAddContact(true)
    console.log(contacts)
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

    return <div className={styles.contactsList}>{displayItem}</div>
  }

  return (
    <div className={styles.mainContainer}>
      <Button handleClick={handleShowForm} text="Add Contact" />

      <div className={styles.letterContainer}>
        <div className={styles.contactGroup}>
          {showForm ? (
            <ContactForm
              handleShowForm={handleShowForm}
              addContact={addContact}
              removeForm={removeForm}
            />
          ) : displayContact && editContact ? (
            <UpdateContactForm
              removeForm={removeForm}
              currentContact={currentContact}
              handleUpdateContact={handleUpdateContact}
            />
          ) : displayContact ? (
            <DisplayContact
              showAddContact={showAddContact}
              closeContact={closeContact}
              currentContact={currentContact}
              deleteContact={deleteContact}
              editCurrentContact={editCurrentContact}
            />
          ) : (
            renderContacts()
          )}
        </div>
        {/* <Letters contacts={contacts} /> */}
      </div>
    </div>
  )
}

export default Contacts
