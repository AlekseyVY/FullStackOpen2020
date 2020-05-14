import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'



const create = (person) => {
    return axios.post(baseUrl, person).then(response => response.data)
}

const getAll = () => {
    const request =  axios.get(baseUrl)
    return request.then(response => response.data)
}

const update = (id, person) => {
    const request = axios.put(`${baseUrl}/${id[0].id}`, person)
    return request.then(response => response.data)
}

const remove = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => console.log(response))
}



export default {create, getAll, update, remove}