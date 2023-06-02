import axios from 'axios'

/* const USER_TOKEN = 'u8MlXsm5Fu0Q0epdCuMQG1cQ' */
/* const Auth = 'Bearer '.concat(USER_TOKEN) */
const REGISTER = 'auth/sign-up'
const LOGIN = 'auth/login'
const HABIT = 'habits'
const DEFAULT_URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/`

export const signUp = (user) => {
   const data = axios.post(DEFAULT_URL.concat(REGISTER), user)
   return data
}

export const signIn = (email, password) => {
   const data = axios.post(DEFAULT_URL.concat(LOGIN), {
      email: email,
      password: password
   })
   return data
}

export const postHabit = (obj, token) => {
   const data = axios.post(DEFAULT_URL.concat(HABIT), obj, {headers: {'Authorization': `Bearer ${token}`}})

   return data
}

export const getHabit = (token) => {
   const data = axios.get(DEFAULT_URL.concat(HABIT), {headers: {'Authorization': `Bearer ${token}`}})

   return data
}

/* export const movies = await axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies')
.then(response => response.data) */
