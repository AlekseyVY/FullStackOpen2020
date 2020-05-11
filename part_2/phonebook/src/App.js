import React, {useState, useEffect} from 'react'
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Numbers from "./components/Numbers";
import axios from 'axios'

const App =() => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get('http://localhost:3001/persons')
            .then(response => {
                const data = response.data
                setPersons(persons.concat(data))
            })
    }, [])


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
    const filtered = persons.filter(x => {
        if (x.name.includes(search)) {
            return x.name
        }
    })




    return(
        <>
            <h2>
                Phonebook
            </h2>
            <Filter search={search}
                    handleSearchFilter={handleSearchFilter}
            />
            <PersonForm handleChange={handleChange}
                        handlePhoneChange={handlePhoneChange}
                        handleInputEvent={handleInputEvent}
                        newName={newName}
                        newPhone={newPhone}
            />
            <Numbers filtered={filtered} />
        </>
    )
}

export default App
