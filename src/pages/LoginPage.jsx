import { Container, Image, FormLogin, Input, InputButton, RegisterLink } from '../styles/Form.style'
import { useContext, useEffect } from 'react'
import { AppContext } from './../App'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Login() {
   const navigate = useNavigate()

   const { animationForm, contentButton, setContentButton, disabledForm, setDisabledForm, logo } =
      useContext(AppContext)

   useEffect(() => {
      setContentButton('Entrar')
      setDisabledForm(false)
   }, [])

   return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
         <Container>
            <Image src={logo} alt="logo trackIt" />
            <FormLogin
               onSubmit={() => {
                  event.preventDefault()

                  setContentButton(animationForm)
                  setDisabledForm(true)
               }}
            >
               <Input type="email" placeholder="email" disabled={disabledForm} /* required */ />
               <Input type="password" placeholder="senha" disabled={disabledForm} /* required */ />
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
