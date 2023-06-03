import { useContext, useEffect, useState } from 'react'
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
   Day,
   InputCancel,
   ContainerHabits,
   Dday,
   ContainerDday,
   Habits
} from './HomePage.style'
import { Input } from '../../styles/Form.style'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { AppContext } from '../../App'
import { alertNotification } from '../../services/notifications'
import { postHabit, getHabit, deleteHabit } from '../../services/api'
import lixeira from '../../assets/lixeira.png'

export default function HomePage() {
   const selectDayReset = [
      { value: 'D', isSelected: false },
      { value: 'S', isSelected: false },
      { value: 'T', isSelected: false },
      { value: 'Q', isSelected: false },
      { value: 'Q', isSelected: false },
      { value: 'S', isSelected: false },
      { value: 'S', isSelected: false }
   ]

   const [habits, setHabits] = useState([])
   const {
      animationForm,
      contentButton,
      setContentButton,
      disabledForm,
      setDisabledForm,
      user,
      setUser
   } = useContext(AppContext)

   const [selectDay, setSelectDay] = useState(selectDayReset)
   const [collapseVisible, setCollapseVisible] = useState(false)
   const [post, setPost] = useState({
      name: '',
      days: ''
   })

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
      }
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
         <Navbar data-test="header">
            <span>TrackIt</span>
            <ImageProfile
               data-test="avatar"
               onClick={() => {
                  window.location.reload()
               }}
               src={user.image}
            />
         </Navbar>

         <Container>
            <Header>
               Meus hábitos
               <button data-test="habit-create-btn" onClick={() => setCollapseVisible(!collapseVisible)}>+</button>
            </Header>

            <CollapseForm
               data-test="habit-create-container"
               collapse={collapseVisible}
               onSubmit={() => {
                  event.preventDefault()
                  if (post.days.length === 0) {
                     alertNotification('Selecione, no mínimo, 01 dia.')
                  } else {
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
                        .catch((error) => console.log(error.response))
                  }
               }}
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
                           onClick={() => {
                              event.preventDefault()
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
                  <InputButton data-test="habit-create-save-btn" disabled={disabledForm} length="secondary">
                     {contentButton}
                  </InputButton>
               </ContainerButtons>
            </CollapseForm>
            {habits.length === 0 ? (
               <p>
                  Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a
                  trackear!
               </p>
            ) : (
               <Habits>
                  {habits.map((habit) => {
                     return (
                        <ContainerHabits data-test="habit-container" key={habit.id}>
                           <section>
                              <p data-test="habit-name">{habit.name}</p>
                              <img
                                 data-test="habit-delete-btn"
                                 onClick={() => {
                                    if (confirm('Deseja apaga este hábito?')) {
                                       deleteHabit(habit.id, user.token).then(() => {
                                          getHabit(user.token)
                                             .then((response) => {
                                                setHabits(response.data)
                                             })
                                             .catch((error) => console.log(error.response))
                                             .catch((error) => console.log(error.response))
                                       })
                                    }
                                 }}
                                 src={lixeira}
                                 alt=""
                              />
                           </section>
                           <ContainerDday>
                              {selectDayReset.map((day, index) => {
                                 return (
                                    <Dday
                                       data-test="habit-day"
                                       select={
                                          habit.days.includes(index) ? 'selected' : 'deselected'
                                       }
                                       key={index}
                                    >
                                       {day.value}
                                    </Dday>
                                 )
                              })}
                           </ContainerDday>
                        </ContainerHabits>
                     )
                  })}
               </Habits>
            )}
         </Container>

         <Footer data-test="menu">
            
            <span data-test="habit-link"> Hábitos</span>

            <CircularProgressbar
               data-test="today-link"
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
            <span data-test="history-link">Histórico</span>
         </Footer>
      </ContainerApp>
   )
}
