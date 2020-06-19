import React, { useState } from "react"
import ContactForm from "./ContactForm"
import uuid from "react-uuid"
import { data, letterData } from "./FakeData"
import Letters from "./Letters"
import styles from "./Contacts.module.css"

const Contacts = () => {
  const [contacts, setContact] = useState(data())
  // const [letterContacts, setLetterContacts] = useState(letterData())
  const [names, setData] = useState(null)

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

  // const handleLetterClick = (e) => {
  //   const letter = e.target.textContent.charAt(0)
  //   let data = renderContacts(letter)
  //   setData(data)
  // }

  const renderContacts = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    const displayItem = letters.map((letter) => {
      if (contacts.hasOwnProperty(letter)) {
        return (
          <div>
            <div>{contacts[letter].length !== 0 ? letter : null}</div>
            {contacts[letter].map((contact) => {
              return (
                <div>
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
  //   const displayItem =
  //   letters.map((letter) => {
  //     if (contacts.hasOwnProperty(letter)) {
  //     return (
  //       <div>
  //         <div>{letter}</div>
  //         {contacts[letter].forEach((contact) => {
  //           return (
  //             <div>
  //               {contact.firstName} {contact.lastName}
  //             </div>
  //           )
  //         })}
  //       </div>
  //     )
  //       }
  //   }
  //   return <div>{displayItem}</div>
  // }

  // const renderContacts = (letter) => {
  //   const contacts =
  //     letterContacts[letter] &&
  //     letterContacts[letter].map((contact) => {
  //       return (
  //         <li key={contact.id}>
  //           {contact.firstName} {contact.lastName}
  //         </li>
  //       )
  //     })
  //   return contacts
  // }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.searchContainer}>
        <h1>Contacts</h1>
        {renderContacts()}
        <ContactForm addContact={addContact} />
      </div>
      {/* <div className={styles.letterContainer}>
        <Letters letterData={letterContacts} letterClick={handleLetterClick} />
      </div> */}
    </div>
  )
}

export default Contacts
