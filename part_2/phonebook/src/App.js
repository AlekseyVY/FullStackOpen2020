import React, {useState} from 'react'
import Filt from "./filtred";


const App =() => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', phone: '040-123456' },
        { name: 'Ada Lovelace', phone: '39-44-5323523' },
        { name: 'Dan Abramov', phone: '12-43-234345' },
        { name: 'Mary Poppendieck', phone: '39-23-6423122' }
    ])
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [search, setSearch] = useState('')

    const handleChange = (event) => {
        setNewName(event.target.value)
    }
    const handlePhoneChange = (event) => {
        setNewPhone(event.target.value)
    }
    const handleSearchFilter = (event) => {
        setSearch(event.target.value)
    }



    let check = false

    const handleInputEvent = (event) => {
        event.preventDefault()
        const person = {
            name: newName,
            phone: newPhone
        }
        persons.map(x => {
            if(x.name === newName){
                check = true
            }
        })
        check ? alert(`${newName} is already added to phonebook`) : setPersons(persons.concat(person))
        setNewName('')
        setNewPhone('')
    }



    return(
        <>
            <h2>
                Phonebook
            </h2>
            <div>
                filter shown with: <input value={search} onChange={handleSearchFilter}/>
            </div>
            filter input: {search}
            <h2>
                add a new
            </h2>
            <form onSubmit={handleInputEvent}>
                <div>
                    name: <input value={newName} onChange={handleChange}/>
                </div>
                <div>
                    phone: <input value={newPhone} onChange={handlePhoneChange}/>
                </div>
                <button type={"submit"}>add</button>
            </form>
            <h2>
                Numbers
            </h2>
            <Filt persons={persons} search={search}/>
        </>
    )
}
//{persons.map(person => <p>{person.name} {person.phone}</p>)}

export default App
