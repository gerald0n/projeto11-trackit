import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import HabitForm from '../../components/HabitForm/HabitForm'
import HabitItem from '../../components/HabitItem/HabitItem'
import { useContext, useEffect, useState } from 'react'

import { ContainerApp, Container, HabitsBox } from './Habits.style'
import 'react-circular-progressbar/dist/styles.css'
import { AppContext } from '../../App'
import { getHabit } from '../../services/api'
import { useNavigate } from 'react-router-dom'

export default function Habits() {
   const selectDayReset = [
      { value: 'D', isSelected: false },
      { value: 'S', isSelected: false },
      { value: 'T', isSelected: false },
      { value: 'Q', isSelected: false },
      { value: 'Q', isSelected: false },
      { value: 'S', isSelected: false },
      { value: 'S', isSelected: false }
   ]

   const [post, setPost] = useState({
      name: '',
      days: ''
   })

   useEffect(() => {
      if (post.days.length > 0) {
         const arrIndex = []
         post.days.forEach((day) => {
            for (const index in selectDay) {
               if (day === selectDay[index]) {
                  arrIndex.push(index)
                  setPost({ ...post, days: arrIndex })
               }
            }
         })
      }
   }, [post])

   const navigate = useNavigate()

   const { setContentButton, setDisabledForm, user, setUser, habits, setHabits } =
      useContext(AppContext)

   const [selectDay, setSelectDay] = useState(selectDayReset)

   useEffect(() => {
      setContentButton('Salvar')
      setDisabledForm(false)
      if (localStorage.length > 0) {
         let local = localStorage.getItem('user')
         local = JSON.parse(local)
         setUser(local)

         getHabit(local.token)
            .then((response) => {
               setHabits(response.data)
            })
            .catch((error) => console.log(error.response))

         return
      }

      navigate('/')
   }, [])

   return (
      <ContainerApp>
         <Navbar userImage={user.image} />
         <Container>
            <HabitForm
               post={post}
               selectDay={selectDay}
               setSelectDay={setSelectDay}
               setPost={setPost}
               selectDayReset={selectDayReset}
            />

            <HabitsBox>
               
               {habits.length === 0 ? (
                  <p>
                     Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a
                     trackear!
                  </p>
               ) : (
                  habits.map((habit, index) => {
                     return (
                        <HabitItem
                           key={index}
                           habit={habit}
                           setHabits={setHabits}
                           selectDayReset={selectDayReset}
                        />
                     )
                  })
               )}
            </HabitsBox>
         </Container>

         <Footer />
      </ContainerApp>
   )
}
