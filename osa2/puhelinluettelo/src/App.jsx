import { useState, useEffect } from 'react'
import nameService from './services/persons'
import Notification from './components/Notification'


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

          <Person key={person.id} person={person} 
          onDelete={() => props.onDelete(person.id, person.name)}
          />

        )}
      </ul>
  )
}

const Person = (props) => {
  return(
  <li className='name'>{props.person.name}: {props.person.number}
     <button className='deleteButton' onClick={props.onDelete}>x</button>
  </li>
  )
}




const App = () => {
  const [persons, setPersons] = useState([]) 
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {

    nameService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  console.log('render', persons.length, 'persons')


  
  const addName = (event) => {
    event.preventDefault()

    const nameExists = persons.some(person => person.name === newName)
    if (nameExists) {
      setErrorMessage(`${newName} is already added to phonebook`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      return
    }

    const nameObject = {
      name: newName,
      number: newNumber
    }

    nameService
    .create(nameObject)
    .then(response => {
      console.log(response)
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
        setErrorMessage(`Added ${response.data.name}`)
        setTimeout(() => {
          setErrorMessage(null)
        },5000)
    
    })
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

  const handleDelete = (id, name) => {
  if (window.confirm(`Delete ${name}?`)) {
    nameService
      .remove(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
      })
  }
}



  return (
    <div>
      <h2>Phonebook</h2>

  <Notification message={errorMessage} />

  <Filter   search={search} onChange={handleSearchChange}/>

 <h3>Add a new contact</h3>
      <PersonForm 
        onSubmit={addName} newName={newName} nameChange={handleNameChange} 
        newNumber={newNumber} numberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons persons={filteredPersons} onDelete={handleDelete} />

    </div>
  )

}

export default App