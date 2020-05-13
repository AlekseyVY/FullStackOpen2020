import React, {useState, useEffect} from 'react'
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Numbers from "./components/Numbers";
import apiService from './services/api'

const App =() => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [search, setSearch] = useState('')

    useEffect(() => {
        apiService.getAll().then(data =>
                setPersons(persons.concat(data)))
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
            number: newPhone
        }
        persons.map(x => {
            if(x.name === newName){
                check = true
            }
        })
        check ? window.confirm(`${newName} is aready added to phonebook, replace the old number with new one?`)
            ? apiService.update(persons.filter(person => {
                if(person.name === newName){
                    return person.id
                }
            }), person).then(data => setPersons(persons.concat(data)))
            : console.log('no')
            : apiService.create(person).then(data => {
                setPersons(persons.concat(data))
            })
        setNewName('')
        setNewPhone('')
    }
    const filtered = persons.filter(x => {
        if (x.name.includes(search)) {
            return x.name
        }
    })

    const handleDelete = (id, name) => {
        window.confirm(`Delete ${name} ?`)
            ? apiService.remove(id).then(response => console.log(response))
            : console.log('remove canceled')
    }



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
            <Numbers filtered={filtered} handleDelete={handleDelete}/>
        </>
    )
}

export default App
