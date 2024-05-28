import { useState, useEffect } from 'react';
import axios from 'axios'
import personService from "./services/persons"

const Search = ({ setFilter }) => {
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      filter: <input onChange={handleFilterChange} />
    </div>
  );
};

const PersonForm = ({addNewContact, newName, newNumber, handleContactChange, handleNumberChange}) => {

  return (
    <form onSubmit={addNewContact}>
        <div>
          name: <input value={newName} onChange={handleContactChange} />
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

const Persons = ({filteredPersons, setPersons}) => {
  const deleteContact = (id, name) => {

    if(window.confirm(`delete ${name}?`))
    {
    personService.remove(id).then(response => {
      setPersons(persons => persons.filter(person => person.id !== id));
    }).catch(error => {
      console.error('Delete failed:', error);
    });
  }
  };

  return (
    <>
    {filteredPersons.map(person => (
      <p key={person.number}>
        {person.name} 
        {person.number} 
        <button onClick={() => deleteContact(person.id, person.name)}>delete</button>
      </p>
    ))}
    </>
  )
}

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filteredPersons, setFilteredPersons] = useState(persons);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setFilteredPersons(
      persons.filter(person =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [filter, persons]);

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  const handleContactChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const addNewContact = (event) => {
    event.preventDefault();
    const existingPerson = persons.find(person => person.name === newName);
    if (existingPerson) {
      if(window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)){
        const updatedPerson = { ...existingPerson, number: newNumber };
        personService
          .update(existingPerson.id, updatedPerson)
          .then(response => {
            setPersons(persons.map(person => person.id !== existingPerson.id ? person : response.data));
          })
          .catch(error => {
            alert(`Failed to update contact: ${error}`);
          });
      }
    } else {
      const newPerson = { name: newName, number: newNumber };
      personService
        .create(newPerson)
        .then(response => {
          setPersons(persons.concat(response.data));
          setNewName('');
          setNewNumber('');
        })
        .catch(error => {
          alert(`Failed to add contact: ${error}`);
        });
    }
  };
  

  return (
    <div>
      <h2>Phonebook</h2>
      <Search setFilter={setFilter} />
      <h2>Add a new</h2>

      <PersonForm addNewContact={addNewContact} newName={newName} newNumber={newNumber} handleContactChange={handleContactChange} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} setPersons={setPersons}/>
    </div>
  );
};

export default App;