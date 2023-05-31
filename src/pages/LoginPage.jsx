import { Container, Image, FormLogin, Input, InputButton, RegisterLink } from '../styles/Form.style'
import { useContext, useEffect } from 'react'
import { AppContext } from './../App'
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { motion } from 'framer-motion'
import { signIn } from '../services/api'
import { errorNotification } from '../services/notifications'

export default function Login() {
   const {
      animationForm,
      contentButton,
      setContentButton,
      disabledForm,
      setDisabledForm,
      logo,
      user,
      setUser
   } = useContext(AppContext)

   useEffect(() => {
      setContentButton('Entrar')
      setDisabledForm(false)
      setUser({ email: '', name: '', image: '', password: '' })
   }, [])

   const navigate = useNavigate()
   const { email, password } = user

   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.5 }}
         style={{ background: '#ffffff', height: '100vh' }}
      >
         <Container>
            <Image src={logo} alt="logo trackIt" />
            <FormLogin
               onSubmit={() => {
                  event.preventDefault()

                  setContentButton(animationForm)
                  setDisabledForm(true)

                  const data = signIn(user.email, user.password)
                  data.then((response) => {
                     setUser(response.data)
                     navigate('/habitos')
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
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  required
               />
               <Input
                  type="password"
                  placeholder="senha"
                  disabled={disabledForm}
                  value={password}
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                  required
               />
               <InputButton type="submit" disabled={disabledForm} /* required */>
                  {contentButton}
               </InputButton>
            </FormLogin>
            <RegisterLink onClick={() => navigate('/cadastro')}>
               Não tem uma conta? Cadastre-se
            </RegisterLink>
         </Container>
      </motion.div>
   )
}
