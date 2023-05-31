import { useContext, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App, { AppContext } from '../../App'
import { successNotification } from '../../services/notifications'
import { ToastContainer } from 'react-toastify'
import {ContainerApp, Navbar, ImageProfile, Container, Header, Footer} from './HomePage.style'
import {
   CircularProgressbar,
   CircularProgressbarWithChildren,
   buildStyles
} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export default function HomePage() {
   /* const { user } = useContext(AppContext) */
   const user = {
      email: 'contato.gneto@gmail.com',
      name: 'Geraldo Gomes',
      image: 'https://lh3.googleusercontent.com/a/AAcHTtc1MJXwwjf3alyo7NIMUEY15WKrJewyHv4rqGnpqA=s288-c-no',
      password: '1921'
   }
   const habits = [
      /* {
      id: 1,
      name: 'Nome do hábito',
      days: [1, 3, 5]
   } */
   ]

   useEffect(() => {
      /* successNotification(`Seja bem-vindo, ${user.name}`) */
      {
         /* <ToastContainer style={{ fontSize: '16px' }} /> */
      }
   }, [])

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

