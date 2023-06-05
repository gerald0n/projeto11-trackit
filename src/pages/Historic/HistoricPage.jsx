import { ContainerApp, HabitsBox, Header } from './Historic.style'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { useContext } from 'react'
import { AppContext } from '../../App'

export default function Historic() {
   const { user } = useContext(AppContext)
   return (
      <ContainerApp>
         <Navbar userImage={user.image} />
         <HabitsBox>
            <Header>Histórico</Header>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
         </HabitsBox>
         <Footer />
      </ContainerApp>
   )
}
