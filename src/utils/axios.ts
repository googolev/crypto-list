import axios from 'axios'

// axios
const service = axios.create()

// response
service.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    return error    
  }
)

export default service
