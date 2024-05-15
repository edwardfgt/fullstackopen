import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: 22213141, 
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleContactChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const addNewContact = (event) => {
    event.preventDefault()
    let newPersons = persons.concat({name: newName, number: newNumber})
    const nameExists = persons.some(person => person.name === newName);
    if(nameExists){
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(newPersons);
    }
  }
  

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewContact}>
        <div>
          name: <input value={newName} onChange={handleContactChange} />
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      {persons.map((person) => (
        <p key={person.number}>{person.name} {person.number}</p>
      ))}
      ...
    </div>
  )
}

export default App