import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import axios from 'axios'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN'
// axios.defaults.headres.post['Contents-Type'] = 'application/json'

axios.interceptors.request.use(
  (request) => {
    console.log(request)
    // Edit request config
    return request
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response) => {
    console.log(response)
    return response
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
