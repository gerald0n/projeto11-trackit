import styled from 'styled-components'
import { Container, Image, FormLogin, Input, InputButton, RegisterLink } from '../styles/Form.style'
import logo from './../assets/Group 37.png'
import { useContext, useEffect } from 'react'
import { AppContext } from './../App'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function RegisterPage() {
   const { animationForm, contentButton, setContentButton, disabledForm, setDisabledForm } =
      useContext(AppContext)

   useEffect(() => {
      setContentButton('Cadastrar')
   }, [])

   const navigate = useNavigate()

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
               <Input type="email" placeholder="email" disabled={disabledForm} required />
               <Input type="password" placeholder="senha" disabled={disabledForm} required />
               <Input type="text" placeholder="nome" disabled={disabledForm} required />
               <Input type="url" placeholder="foto" disabled={disabledForm} required />
               <InputButton type="submit" disabled={disabledForm} required>
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
