import axios from 'axios'

const instance = axios.create({
  baseURL:
    'https://react-burger-builder-ser-218d2-default-rtdb.firebaseio.com/',
})

export default instance
