import Faker from "faker"
import uuid from "react-uuid"

export const data = () => {
  const newData = []
  for (let i = 0; i < 50; i++) {
    const contact = {
      firstName: Faker.name.firstName(),
      lastName: Faker.name.lastName(),
      id: uuid(),
    }
    newData.push(contact)
  }
  return newData
}

export const letterData = () => {
  const newData = data()
  const letterContacts = {}
  newData.forEach((contact) => {
    const searchLetter = contact.lastName.charAt(0).toUpperCase()
    const existingContacts = letterContacts[searchLetter] || []
    letterContacts[searchLetter] = [...existingContacts, contact]
  })
  return letterContacts
}
