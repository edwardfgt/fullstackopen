import { useState, useEffect } from 'react';

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

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: 22213141 },
    // Add more persons as needed
  ]);

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

  const handleContactChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const addNewContact = (event) => {
    event.preventDefault();
    const nameExists = persons.some(person => person.name === newName);
    if (nameExists) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const newPersons = persons.concat({ name: newName, number: newNumber });
      setPersons(newPersons);
      setNewName('');
      setNewNumber('');
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Search setFilter={setFilter} />
      <h2>Add a new</h2>
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
      {filteredPersons.map(person => (
        <p key={person.number}>{person.name} {person.number}</p>
      ))}
    </div>
  );
};

export default App;