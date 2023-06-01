import { useContext, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppContext } from '../../App'
import { successNotification } from '../../services/notifications'
import { InputButton } from '../../styles/Form.style'
import { ToastContainer } from 'react-toastify'
import {
   ContainerApp,
   Navbar,
   ImageProfile,
   Container,
   Header,
   Footer,
   CollapseForm,
   ContainerButtons,
   ContainerDays,
   Day
} from './HomePage.style'

import { Input } from '../../styles/Form.style'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export default function HomePage() {
   const { user } = useContext(AppContext)
   console.log(user)

   const [selectDay, setSelectDay] = useState([
      { value: 'D', isSelected: false },
      { value: 'S', isSelected: false },
      { value: 'T', isSelected: false },
      { value: 'Q', isSelected: false },
      { value: 'Q', isSelected: false },
      { value: 'S', isSelected: false },
      { value: 'S', isSelected: false }
   ])

   const [post, setPost] = useState({
      name: '',
      days: ''
   })

   const habits = [
      /* {
      id: 1,
      name: 'Nome do hábito',
      days: [1, 3, 5]
   } */
   ]

   useEffect(() => {
      successNotification(`Seja bem-vindo, ${user.name}!`)
   }, [])

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

   return (
      <ContainerApp>
         <Navbar>
            <span>TrackIt</span>
            <ImageProfile src={user.image} />
         </Navbar>
         {habits.length === 0 ? (
            <Container>
               <Header>
                  Meus hábitos
                  <button>+</button>
               </Header>
               <CollapseForm
                  onSubmit={() => {
                     event.preventDefault()
                     console.log(post)
                  }}
               >
                  <Input
                     required
                     type="text"
                     context="homepage"
                     placeholder="nome do hábito"
                     value={post.name}
                     onChange={(e) => {
                        setPost({ ...post, name: e.target.value })
                     }}
                  />
                  <ContainerDays>
                     {selectDay.map((day, index) => {
                        return (
                           <Day
                              onClick={() => {
                                 day.isSelected = !day.isSelected
                                 const aux = [...selectDay]
                                 setSelectDay(aux)
                                 setPost({
                                    ...post,
                                    days: selectDay.filter((day) => day.isSelected === true)
                                 })
                              }}
                              key={index}
                              select={day.isSelected}
                           >
                              {day.value}
                           </Day>
                        )
                     })}
                  </ContainerDays>

                  <ToastContainer style={{ fontSize: '16px', marginTop: '5rem' }} />
                  <ContainerButtons>
                     <a>Cancelar</a>
                     <InputButton length="secondary">Salvar</InputButton>
                  </ContainerButtons>
               </CollapseForm>
               <p>
                  Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a
                  trackear!
               </p>
            </Container>
         ) : (
            <Container>askdjaskdj</Container>
         )}
         <Footer>
            <span>Hábitos</span>

            <CircularProgressbar
               className="progressbar"
               value="66"
               text="Hoje"
               background
               backgroundPadding={6}
               styles={buildStyles({
                  backgroundColor: '#52B6FF',
                  textColor: '#fff',
                  pathColor: '#fff',
                  trailColor: 'transparent'
               })}
            />
            <span>Histórico</span>
         </Footer>
      </ContainerApp>
   )
}
