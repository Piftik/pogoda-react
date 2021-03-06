import defaultAxios from 'axios'

export const axios = defaultAxios.create({
    baseURL: 'https://api-nodejs-todolist.herokuapp.com',
    headers: { 'Content-Type': 'application/json' }
})

export default { axios }
