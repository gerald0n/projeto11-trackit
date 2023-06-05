import { useNavigate } from "react-router-dom"
import { ContainerNavbar, ImageProfile } from "./Navbar.style"

export default function Navbar({userImage}) {
   const navigate = useNavigate()
   return (
      <ContainerNavbar data-test="header">
         <span>TrackIt</span>
         <ImageProfile
            data-test="avatar"
            onClick={() => navigate('/hoje')}
            src={userImage}
         />
      </ContainerNavbar>
   )
}