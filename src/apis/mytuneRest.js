import axios from 'axios'

export default axios.create({
    baseURL: 'https://mytune-service.herokuapp.com/api'
})