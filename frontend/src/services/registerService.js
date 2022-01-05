/* eslint-disable */
import axios from 'axios'
const baseUrl = 'https://localhost:5000/api/v1/register'

const register = async user => {
  console.log("came here in register")
  console.log(user);
  const response = await axios.post(baseUrl, user, {
    withCredentials: true,
  })
  console.log("BE RESP: ", response)
  return response.data
}
export default {register}