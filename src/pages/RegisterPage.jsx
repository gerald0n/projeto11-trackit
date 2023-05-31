import { Container, Image, FormLogin, Input, InputButton, RegisterLink } from '../styles/Form.style'
import logo from './../assets/Group 37.png'
import { useContext, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { AppContext } from './../App'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import register from '../services/api'
import { errorNotification, successNotification } from '../services/notifications'

export default function RegisterPage() {
   const {
      animationForm,
      contentButton,
      setContentButton,
      disabledForm,
      setDisabledForm,
      user,
      setUser
   } = useContext(AppContext)

   useEffect(() => {
      setContentButton('Cadastrar')
      setDisabledForm(false)
   }, [])

   const navigate = useNavigate()
   const { email, name, image, password } = user

   return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
         <Container>
            <Image src={logo} alt="logo trackIt" />
            <FormLogin
               onSubmit={() => {
                  event.preventDefault()

                  setContentButton(animationForm)
                  setDisabledForm(true)

                  const data = register(user)
                  data.then((response) => {
                     successNotification('Cadastro efetuado com sucesso!')
                     setTimeout(() => {
                        setUser(response.data)
                        navigate('/')
                     }, 2500)
                  })
                  data.catch((error) => {
                     errorNotification(error.response.data.message)
                     setDisabledForm(false)
                     setContentButton('Cadastrar')
                  })
               }}
            >
               <ToastContainer style={{ fontSize: '16px' }} />
               <Input
                  type="email"
                  placeholder="email"
                  disabled={disabledForm}
                  value={email}
                  onChange={(e) => {
                     setUser({ ...user, email: e.target.value })
                  }} /* required */
               />
               <Input
                  type="password"
                  placeholder="senha"
                  disabled={disabledForm}
                  value={password}
                  onChange={(e) => {
                     setUser({ ...user, password: e.target.value })
                  }} /* required */
               />
               <Input
                  type="text"
                  placeholder="nome"
                  disabled={disabledForm}
                  value={name}
                  onChange={(e) => {
                     setUser({ ...user, name: e.target.value })
                  }} /* required */
               />
               <Input
                  type="url"
                  placeholder="foto"
                  disabled={disabledForm}
                  value={image}
                  onChange={(e) => {
                     setUser({ ...user, image: e.target.value })
                  }} /* required */
               />
               <InputButton type="submit" disabled={disabledForm} /* required */>
                  {contentButton}
               </InputButton>
            </FormLogin>
            <RegisterLink disabled={disabledForm} onClick={() => navigate('/')}>
               Já tem uma conta? Faça login!
            </RegisterLink>
         </Container>
      </motion.div>
   )
}
