/* eslint-disable */

import axios from 'axios'
const baseUrl = 'https://localhost:5000/api/v1/login'

let id = null

let axiosConfig = {
  withCredentials: true,
}

const login = async credentials => {
  const response = await axios.post(baseUrl, credentials, axiosConfig)
  console.log(response)
  return response.data
}
export default {login}