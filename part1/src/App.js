import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import Notification from './components/Notification'
import Footer from './components/Footer'
import noteService from './services/notes'
import loginService from './services/login'
import LoginForm from "./components/LoginForm";
import Toggable from "./components/Toggable";
import NoteForm from "./components/NoteForm";

const App = () => {
    const [notes, setNotes] = useState([])
    const [showAll, setShowAll] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)

    useEffect(() => {
        noteService
            .getAll()
            .then(initialNotes => {
                setNotes(initialNotes)
            })
    }, [])

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
            noteService.setToken(user.token)
        }
    }, [])

    const addNote = (noteObject) => {
        noteFormRef.current.toggleVisibility()
        noteService
            .create(noteObject)
            .then(returnedNote => {
                setNotes(notes.concat(returnedNote))
            })
    }

    const toggleImportanceOf = (id) => {
        const note = notes.find(n => n.id === id)
        const changedNote = { ...note, important: !note.important }

        noteService
            .update(id, changedNote)
            .then(returnedNote => {
                setNotes(notes.map(note => note.id !== id ? note : returnedNote))
            })
            .catch(error => {
                setErrorMessage(
                    `Note '${note.content}' was already removed from server`
                )
                setTimeout(() => {
                    setErrorMessage(null)
                }, 5000)
            })
    }

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const user = await loginService.login({
                username, password,
            })

            window.localStorage.setItem(
                'loggedNoteappUser', JSON.stringify(user)
            )

            noteService.setToken(user.token)
            setUser(user)
            setUsername('')
            setPassword('')
        } catch (exception) {
            setErrorMessage('wrong credentials')
            setTimeout(() => {
                setErrorMessage(null)
            }, 5000)
        }
    }


    const loginForm = () => {
        return (
        <Toggable buttonLabel='login'>
            <LoginForm
                username={username}
                password={password}
                handleUsernameChange={({ target }) => setUsername(target.value)}
                handlePasswordChange={({ target }) => setPassword(target.value)}
                handleSubmit={handleLogin}
            />
        </Toggable>
        )
    }

    const noteFormRef = React.createRef()

    const noteForm = () => (
        <Toggable buttonLabel={'new note'} ref={noteFormRef}>
            <NoteForm createNote={addNote}/>
        </Toggable>
    )

    const notesToShow = showAll
        ? notes
        : notes.filter(note => note.important)

    return (
        <div>
            <h1>Notes</h1>
            <Notification message={errorMessage} />

            {user === null ?
                loginForm() :
                <div>
                    <p>{user.name} logged in</p>
                    {noteForm()}
                </div>
            }

            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    show {showAll ? 'important' : 'all' }
                </button>
            </div>
            <ul>
                {notesToShow.map((note, i) =>
                    <Note
                        key={i}
                        note={note}
                        toggleImportance={() => toggleImportanceOf(note.id)}
                    />
                )}
            </ul>

            <Footer />
        </div>
    )
}

export default App
