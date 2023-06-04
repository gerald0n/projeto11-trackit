import { useContext, useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

import {
   ContainerApp,
   Container,
   Header,
   ContainerHabits,
   BoxCheck,
   CurrentSequence,
   HighestSequence
} from './Today.style'

import { AppContext } from '../../App.jsx'

import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import localeData from 'dayjs/plugin/localeData'
import 'dayjs/locale/pt-br'
import { useNavigate } from 'react-router-dom'
import check from './../../assets/check.png'

import { getHabitsToday } from '../../services/api.js'

dayjs.extend(localizedFormat)
dayjs.extend(localeData)

export default function Today() {
   const { user, setUser } = useContext(AppContext)
   const navigate = useNavigate()
   dayjs.locale('pt-br')
   const fullDay = dayjs()
      .format('dddd')
      .charAt(0)
      .toUpperCase()
      .concat(dayjs().format('dddd').slice(1))
   const dayAndMonth = dayjs().format('DD/MM')

   const [habitsToday, setHabitsToday] = useState([])

   useEffect(() => {
      if (localStorage.length > 0) {
         let local = localStorage.getItem('user')
         local = JSON.parse(local)
         setUser(local)

         getHabitsToday(local.token)
            .then((response) => setHabitsToday(response.data))
            .catch((error) => alert(error.response))

         return
      }

      navigate('/')
   }, [])

   return (
      <ContainerApp>
         
         <Navbar userImage={user.image} />

         <Container>
            <Header>
               <h1>{`${fullDay}, ${dayAndMonth}`}</h1>
               <p>Nenhum hábito concluído ainda</p>
            </Header>
            {habitsToday.map((habit) => {
               return (
                  <ContainerHabits key={habit.id}>
                     <section>
                        <h2>{habit.name}</h2>
                        <div>
                           <p>
                              Sequência atual:{' '}
                              <CurrentSequence>{`${habit.currentSequence} dias`}</CurrentSequence>
                           </p>
                           <p>
                              Seu recorde:{' '}
                              <HighestSequence>{`${habit.highestSequence} dias`}</HighestSequence>
                           </p>
                        </div>
                     </section>
                     <BoxCheck check={habit.done}>
                        <img src={check} />
                     </BoxCheck>
                  </ContainerHabits>
               )
            })}
         </Container>

         <Footer />
      </ContainerApp>
   )
}
