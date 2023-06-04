import LoginPage from './pages/LoginPage'
import Today from './pages/Today/Today'
import Habits from './pages/Habits/Habits'
import RegisterPage from './pages/RegisterPage'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useState, createContext } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import logo from './assets/Group 37.png'
import { AnimatePresence } from 'framer-motion'

export const AppContext = createContext()

function App() {
   const animationForm = (
      <ThreeDots
         height="13"
         width="51"
         radius="9"
         color="#ffffff"
         ariaLabel="three-dots-loading"
         wrapperStyle={{}}
         wrapperClassName=""
         visible={true}
      />
   )

   const [contentButton, setContentButton] = useState('')
   const [disabledForm, setDisabledForm] = useState(null)
   const [user, setUser] = useState({
      email: '',
      name: '',
      image: '',
      password: ''
   })
   const [habits, setHabits] = useState([])

   return (
      <AnimatePresence>
         <AppContext.Provider
            value={{
               animationForm,
               contentButton,
               setContentButton,
               disabledForm,
               setDisabledForm,
               logo,
               user,
               setUser,
               habits,
               setHabits
            }}
         >
            <Routes location={useLocation()} key={useLocation().pathname}>
               <Route path="/" element={<LoginPage />} />
               <Route path="/cadastro" element={<RegisterPage />} />
               <Route path="/habitos" element={<Habits />} />
               <Route path="/hoje" element={<Today />} />
            </Routes>
         </AppContext.Provider>
      </AnimatePresence>
   )
}

export default App
