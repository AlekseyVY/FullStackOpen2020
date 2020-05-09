import React, {useState} from 'react'




const App =() => {
    const [persons, setPersons] = useState([{name: 'Arto Hellas', phone: '040-1234567'}])
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')

    const handleChange = (event) => {
        setNewName(event.target.value)
    }
    const handlePhoneChange = (event) => {
        setNewPhone(event.target.value)
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
        console.log(check)
        check ? alert(`${newName} is already added to phonebook`) : setPersons(persons.concat(person))
        setNewName('')
        setNewPhone('')
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
                <div>
                    phone: <input value={newPhone} onChange={handlePhoneChange}/>
                </div>
                <button type={"submit"}>add</button>
            </form>
            <h2>
                Numbers
            </h2>
            {persons.map(person => <p>{person.name} {person.phone}</p>)}
        </>
    )
}


export default App
