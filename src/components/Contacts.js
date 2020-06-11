import React, { useState } from "react"
import ContactForm from "./ContactForm"
import uuid from "react-uuid"
import { data, letterData } from "./FakeData"
import Letters from "./Letters"
import styles from "./Contacts.module.css"

const Contacts = () => {
  const [contacts, setContact] = useState(data())
  const [letterContacts, setLetterContacts] = useState(letterData())

  const addContact = (contact) => {
    const searchLetter = contact.lastName.charAt(0).toUpperCase()
    const newContact = { ...contact, id: uuid() }
    setContact([...contacts, newContact])
    const existingContacts = letterContacts[searchLetter] || []
    setLetterContacts({
      ...letterContacts,
      [searchLetter]: [...existingContacts, newContact],
    })
  }

  // useEffect(() => {
  //   for (let i = 0; i < 50; i++) {
  //     const contact = {
  //       firstName: Faker.name.firstName(),
  //       lastName: Faker.name.lastName(),
  //       id: uuid(),
  //     }
  //     setContact([...contacts, contact])
  //   }
  // }, [])

  const renderContacts = () => {
    return (
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.firstName} {contact.lastName}
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.searchContainer}>
        <h1>All Contacts</h1>
        {renderContacts()}
        <ContactForm addContact={addContact} />
      </div>
      <div className={styles.letterContainer}>
        <Letters letterData={letterContacts} />
      </div>
    </div>
  )
}

export default Contacts
