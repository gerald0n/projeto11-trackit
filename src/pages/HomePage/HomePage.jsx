import { css } from 'styled-components'
import { useContext, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App, { AppContext } from '../../App'
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
   Collapse,
   ContainerButtons,
   ContainerDays,
   Day
} from './HomePage.style'

import { Input } from '../../styles/Form.style'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import styled from 'styled-components'

export default function HomePage() {
   /* const { user } = useContext(AppContext) */
   const user = {
      email: 'contato.gneto@gmail.com',
      name: 'Geraldo Gomes',
      image: 'https://lh3.googleusercontent.com/a/AAcHTtc1MJXwwjf3alyo7NIMUEY15WKrJewyHv4rqGnpqA=s288-c-no',
      password: '1921'
   }

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
      successNotification(`Seja bem-vindo, ${user.name}`)
   }, [])
   useEffect(() => {
      console.log(post)
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
               <Collapse>
                  <Input
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
               </Collapse>
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
