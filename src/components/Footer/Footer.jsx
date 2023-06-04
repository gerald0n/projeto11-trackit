import { ContainerFooter } from "./Footer.style"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export default function Footer() {
   return (
      <ContainerFooter data-test="menu">
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
      </ContainerFooter>
   )
}