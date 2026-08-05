import { useState } from 'react'


const Filter = (props) => {
return(
  <div>
    <h4>Search names</h4>
   <input value={props.search} onChange={props.onChange} />
  </div>
)
}


const PersonForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <div>
        name: <input value={props.newName} onChange={props.nameChange}/>
      </div>
      <div>
        number: <input value={props.newNumber} onChange={props.numberChange}/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}


const Persons = (props) => {
  return(
       <ul>
        {props.persons.map(person => 

          <Person key={person.name} person={person} />
        )}
      </ul>
  )
}

const Person = (props) => {
  return(
  <li>{props.person.name}: {props.person.number}</li>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const addName = (event) => {
    event.preventDefault()

    const nameExists = persons.some(person => person.name === newName)
    if (nameExists) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const nameObject = {
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    //console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
  setSearch(event.target.value)
  }

  const filteredPersons = persons.filter(person =>
  person.name.toLowerCase().includes(search.toLowerCase())
  )



  return (
    <div>
      <h2>Phonebook</h2>

  <Filter   search={search} onChange={handleSearchChange}/>

 <h3>Add a new contact</h3>
      <PersonForm 
        onSubmit={addName} newName={newName} nameChange={handleNameChange} 
        newNumber={newNumber} numberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons persons={filteredPersons}/>

    </div>
  )

}

export default App