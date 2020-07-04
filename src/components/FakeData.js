import Faker from "faker"
import uuid from "react-uuid"

export const data = (contacts) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  const newData = {}
  letters.forEach((letter) => {
    newData[letter] = []
  })
  for (let i = 0; i < contacts.length; i++) {
    const firstInitial = contacts[i].lastName.charAt(0)
    newData[firstInitial].push(contacts[i])
  }

  return newData
}

export const contactData = () => {
  const allContactData = []

  for (let i = 0; i < 50; i++) {
    const contact = {
      firstName: Faker.name.firstName(),
      lastName: Faker.name.lastName(),
      id: uuid(),
    }

    allContactData.push(contact)
  }
  return allContactData
}

// export const letterData = () => {
//   const newData = data()
//   const letterContacts = {}
//   newData.forEach((contact) => {
//     const searchLetter = contact.lastName.charAt(0).toUpperCase()
//     const existingContacts = letterContacts[searchLetter] || []
//     letterContacts[searchLetter] = [...existingContacts, contact]
//   })
//   return letterContacts
// }
