import { ContainerNavbar, ImageProfile } from "./Navbar.style"

export default function Navbar({userImage}) {
   return (
      <ContainerNavbar data-test="header">
         <span>TrackIt</span>
         <ImageProfile
            data-test="avatar"
            onClick={() => {
               window.location.reload()
            }}
            src={userImage}
         />
      </ContainerNavbar>
   )
}