import axios from "axios";

/* const USER_TOKEN = 'u8MlXsm5Fu0Q0epdCuMQG1cQ' */
/* const Auth = 'Bearer '.concat(USER_TOKEN) */
const REGISTER = 'auth/sign-up'
const LOGIN = 'auth/login'
const DEFAULT_URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/`

const register = (user) => {
  
  const data = axios.post(DEFAULT_URL.concat(REGISTER), user)
  return data;
}

const login = () => {

}

export default register

/* export const movies = await axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies')
.then(response => response.data) */

