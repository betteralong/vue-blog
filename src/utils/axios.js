import axios from 'axios'

const instance = axios.create({
  // baseURL: 'http://www.betteralong.top/'
  baseURL: 'http://localhost:5000/'
})

instance.interceptors.response.use(response => {
  return response.data
}, error => {
  return Promise.reject(error)
})

export default instance
