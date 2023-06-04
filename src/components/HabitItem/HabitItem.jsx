import { deleteHabit, getHabit } from '../../services/api'
import lixeira from '../../assets/lixeira.png'
import { ContainerHabits, ContainerDday, Dday } from './HabitItem.style'
import { useContext } from 'react'
import { AppContext } from '../../App'

export default function HabitItem({ habit, setHabits, selectDayReset }) {
   const { user } = useContext(AppContext)

   const handleDeleteConfirmation = () => {
      if (confirm('Deseja apaga este hábito?')) {
         deleteHabit(habit.id, user.token)
            .then(() => {
               getHabit(user.token)
                  .then((response) => {
                     setHabits(response.data)
                  })
                  .catch((error) => alert(error.response))
            })
            .catch((error) => alert(error.response))
      }
   }

   return (
      <ContainerHabits data-test="habit-container" key={habit.id}>
         <section>
            <p data-test="habit-name">{habit.name}</p>
            <img
               data-test="habit-delete-btn"
               onClick={handleDeleteConfirmation}
               src={lixeira}
               alt=""
            />
         </section>
         <ContainerDday>
            {selectDayReset.map((day, index) => {
               return (
                  <Dday
                     data-test="habit-day"
                     select={habit.days.includes(index) ? 'selected' : 'deselected'}
                     key={index}
                  >
                     {day.value}
                  </Dday>
               )
            })}
         </ContainerDday>
      </ContainerHabits>
   )
}
