import React, {useState} from 'react'




const App =() => {
    const [persons, setPersons] = useState([{name: 'Arto Hellas'}])
    const [newName, setNewName] = useState('')

    const handleChange = (event) => {
        setNewName(event.target.value)
    }

    const handleInputEvent = (event) => {
        event.preventDefault()
        const person = {
            name: newName,
            date: new Date().toISOString(),
            id: persons.length + 1,
        }
        setPersons(persons.concat(person))
        setNewName('')
    }


    return(
        <>
            <h2>
                Phonebook
            </h2>
            <form onSubmit={handleInputEvent}>
                <div>
                    name: <input value={newName} onChange={handleChange}/>
                </div>
                <button type={"submit"}>add</button>
            </form>
            <h2>
                Numbers
            </h2>
            {persons.map(person => <p>{person.name}</p>)}
        </>
    )
}


export default App
