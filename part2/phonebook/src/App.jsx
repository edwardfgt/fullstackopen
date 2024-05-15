import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleContactChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addNewContact = (event) => {
    event.preventDefault()
    let newPersons = persons.concat({name: newName})
    setPersons(newPersons);
  }
  

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewContact}>
        <div>
          name: <input value={newName} onChange={handleContactChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      {persons.map((person) => (
        <p key={person.name}>{person.name}</p>
      ))}
      ...
    </div>
  )
}

export default App