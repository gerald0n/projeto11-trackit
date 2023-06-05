import { ContainerFooter } from './Footer.style'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { useNavigate } from 'react-router-dom'
import { getHabitsToday } from '../../services/api'
import { useContext, useEffect } from 'react'
import { AppContext } from '../../App'


export default function Footer() {
   const navigate = useNavigate()
   const {setUser, setHabitsToday, setProgress, progress, habitsToday} = useContext(AppContext)

   useEffect(() => {
      if (localStorage.length > 0) {
         let local = localStorage.getItem('user')
         local = JSON.parse(local)
         setUser(local)

         getHabitsToday(local.token)
            .then((response) => {
               setHabitsToday(response.data)
               let count = 0;
               response.data.forEach(habit => {
                  if(habit.done) {
                     count ++
                  }
               })
               setProgress(count)
            })
            .catch((error) => alert(error.response.data))

         return
      }

      navigate('/')
   }, [])

   return (
      <ContainerFooter data-test="menu">
         <span data-test="habit-link" onClick={() => navigate('/habitos')}>
            Hábitos
         </span>
         <div onClick={() => navigate('/hoje')}>
            <CircularProgressbar
               data-test="today-link"
               className="progressbar"
               value={(habitsToday.length > 0 ? (progress / habitsToday.length) * 100 : 0)}
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
         </div>
         <span data-test="history-link" onClick={() => navigate('/historico')}>
            Histórico
         </span>
      </ContainerFooter>
   )
}
