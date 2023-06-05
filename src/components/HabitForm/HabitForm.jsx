import { InputButton, Input } from '../../styles/Form.style'
import { ToastContainer } from 'react-toastify'
import { alertNotification } from '../../services/notifications'
import { postHabit, getHabit } from '../../services/api'
import { useState, useContext } from 'react'
import { AppContext } from '../../App'
import {
   CollapseForm,
   ContainerButtons,
   ContainerDays,
   Day,
   InputCancel,
   Header
} from './HabitForm.style'

export default function HabitForm({ post, selectDay, setSelectDay, setPost, selectDayReset }) {
   const [collapseVisible, setCollapseVisible] = useState(false)
   const {
      disabledForm,
      setDisabledForm,
      setContentButton,
      contentButton,
      animationForm,
      user,
      setHabits
   } = useContext(AppContext)

   const handleDayClick = day => {
      event.preventDefault()
      day.isSelected = !day.isSelected
      const aux = [...selectDay]
      setSelectDay(aux)
      setPost({
         ...post,
         days: selectDay.filter((day) => day.isSelected === true)
      })
   }

   const handleSubmit = () => {
      event.preventDefault()
      if (post.days.length === 0) {
         alertNotification('Selecione, no mínimo, 01 dia.')

         return
      }

      setContentButton(animationForm)
      setDisabledForm(true)

      postHabit(post, user.token)
         .then(() => {
            setPost({ name: '', days: [] })
            setSelectDay(selectDayReset)
            setCollapseVisible(!collapseVisible)
            /*  */
            getHabit(user.token)
               .then((response) => {
                  setHabits(response.data)
                  setContentButton('Salvar')
                  setDisabledForm(false)
               })
               .catch((error) => alert(error.response))
         })
         .catch((error) => alert(error.response))
   }

   return (
      <>
         <Header>
            Meus hábitos
            <button
               data-test="habit-create-btn"
               onClick={() => setCollapseVisible(!collapseVisible)}
            >
               +
            </button>
         </Header>
         <CollapseForm
            data-test="habit-create-container"
            collapse={collapseVisible}
            onSubmit={handleSubmit}
         >
            <Input
               required
               data-test="habit-name-input"
               type="text"
               context="homepage"
               placeholder="nome do hábito"
               value={post.name}
               disabled={disabledForm}
               onChange={(e) => {
                  setPost({ ...post, name: e.target.value })
               }}
            />
            <ContainerDays>
               {selectDay.map((day, index) => {
                  return (
                     <Day
                        data-test="habit-day"
                        disabled={disabledForm}
                        onClick={() => {handleDayClick(day, index)}}
                        key={index}
                        select={day.isSelected}
                     >
                        {day.value}
                     </Day>
                  )
               })}
            </ContainerDays>

            <ToastContainer style={{ fontSize: '16px' }} />
            <ContainerButtons>
               <InputCancel
                  data-test="habit-create-cancel-btn"
                  disabled={disabledForm}
                  onClick={() => {
                     event.preventDefault()
                     setCollapseVisible(!collapseVisible)
                  }}
               >
                  Cancelar
               </InputCancel>
               <InputButton
                  data-test="habit-create-save-btn"
                  disabled={disabledForm}
                  length="secondary"
               >
                  {contentButton}
               </InputButton>
            </ContainerButtons>
         </CollapseForm>
      </>
   )
}
