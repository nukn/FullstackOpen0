import { useState } from 'react'

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
    { name: 'Arto Hellas', number: '12345'}
  ]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


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


  return (
    <div>
      <h2>Phonebook</h2>


 <h3>Add a new contact</h3>
      <PersonForm 
        onSubmit={addName} newName={newName} nameChange={handleNameChange} 
        newNumber={newNumber} numberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons persons={persons}/>

    </div>
  )

}

export default App