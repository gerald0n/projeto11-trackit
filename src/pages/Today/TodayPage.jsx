import { useContext } from 'react'
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
import check from './../../assets/check.png'

import { getHabitsToday, checkHabit, uncheckHabit } from '../../services/api.js'

dayjs.extend(localizedFormat)
dayjs.extend(localeData)

export default function Today() {
   const { user, habitsToday, setHabitsToday, progress, setProgress } =
      useContext(AppContext)

   dayjs.locale('pt-br')

   const fullDay = dayjs()
      .format('dddd')
      .charAt(0)
      .toUpperCase()
      .concat(dayjs().format('dddd').slice(1))

   const dayAndMonth = dayjs().format('DD/MM')

   return (
      <ContainerApp>
         <Navbar userImage={user.image} />

         <Container>
            <Header>
               <h1 data-test="today">{`${fullDay}, ${dayAndMonth}`}</h1>
               {progress === 0 ? (
                  <p data-test="today-counter">Nenhum hábito concluído ainda</p>
               ) : (
                  <p data-test="today-counter" style={{ color: '#8FC549' }}>{`${
                     ((progress / habitsToday.length) * 100).toFixed()
                  }% dos hábitos concluídos`}</p>
               )}
            </Header>
            {habitsToday.map((habit) => {
               return (
                  <ContainerHabits data-test="today-habit-container" key={habit.id}>
                     <section>
                        <h2 data-test="today-habit-name">{habit.name}</h2>
                        <div>
                           <p data-test="today-habit-sequence">
                              Sequência atual:
                              <CurrentSequence status={habit.done}>{` ${habit.currentSequence} dias`}</CurrentSequence>
                           </p>
                           <p data-test="today-habit-record">
                              Seu recorde:
                              <HighestSequence current={habit.currentSequence} highest={habit.highestSequence}>{` ${habit.highestSequence} dias`}</HighestSequence>
                           </p>
                        </div>
                     </section>
                     <BoxCheck
                        data-test="today-habit-check-btn"
                        check={habit.done}
                        onClick={() => {
                           if (!habit.done) {
                              checkHabit(habit.id, user.token)
                                 .then(() => {
                                    getHabitsToday(user.token)
                                       .then((response) => {
                                          setHabitsToday(response.data)
                                          setProgress(progress + 1)
                                       })
                                       .catch((error) => alert(error.response.data))
                                 })
                                 .catch((error) => console.log(error.response.data))
                           } else {
                              uncheckHabit(habit.id, user.token)
                                 .then(() => {
                                    getHabitsToday(user.token)
                                       .then((response) => {
                                          setHabitsToday(response.data)
                                          setProgress(progress - 1)
                                       })
                                       .catch((error) => alert(error.response.data))
                                 })
                                 .catch((error) => alert(error.response.data))
                           }
                        }}
                     >
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
