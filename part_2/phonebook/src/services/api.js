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
    const request = axios.put(`${baseUrl}/${id}`, person)
    return request.then(response => response.data)
}



export default {create, getAll, update}
