import styled, { css } from 'styled-components'

export const ContainerApp = styled.div`
   height: 100vh;
   background: #f2f2f2;

   p {
      font-size: 1.8rem;
      line-height: 22px;
      padding-top: 0.8rem;
      color: #666666;
      padding-inline: 1.7rem;
   }
`

export const Footer = styled.footer`
   position: fixed;
   width: 100%;
   height: 7rem;
   left: 0px;
   bottom: 0px;

   background: #ffffff;

   display: flex;
   align-items: center;
   justify-content: space-between;

   color: #52b6ff;

   span {
      padding-inline: 3.6rem;
      font-size: 1.8rem;
   }

   .progressbar {
      width: 9.1rem;
      margin-bottom: 5rem;
   }
`

export const Container = styled.div`
   padding-top: 9.2rem;
   padding-inline: 1.7rem;
`

export const Header = styled.div`
   font-size: 2.2rem;
   color: #126ba5;

   display: flex;
   align-items: center;
   justify-content: space-between;

   margin-bottom: 2rem;

   button {
      width: 40px;
      height: 35px;
      border: none;
      background: #52b6ff;
      border-radius: 4.63636px;

      font-family: 'Lexend Deca';
      font-style: normal;
      font-weight: 400;
      font-size: 2.6rem;
      text-align: center;

      color: #ffffff;
   }
`

export const Navbar = styled.div`
   width: 100%;
   height: 7rem;

   display: flex;
   align-items: center;
   justify-content: space-between;
   padding-inline: 1.8rem;

   background: #126ba5;
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

   position: fixed;
   left: 0;
   top: 0;

   span {
      font-family: 'Playball';
      font-size: 3.8rem;

      color: #ffffff;
   }
`

export const ImageProfile = styled.img`
   width: 5.1rem;
   height: 5.1rem;
   border-radius: 100%;
`

export const CollapseForm = styled.form`
   ${({ collapse }) => {
      return collapse
         ? css`
              height: 18rem;
              padding: 1.9rem;
              margin-bottom: 1rem;
              transition: all 0.3s;
              opacity: 0.9;
           `
         : css`
              height: 0;
              padding: 0;
              margin-bottom: 0;
              transition: all 0.3s;
              opacity: 0.1;
           `
   }}
   overflow: hidden;
   background: #ffffff;
   border-radius: 5px;

   display: flex;
   flex-direction: column;
   justify-content: space-between;
`
export const ContainerButtons = styled.div`
   display: flex;
   justify-content: end;
   align-items: center;
   gap: 2.3rem;

   a {
      font-size: 1.6rem;
      color: #52b6ff;
   }
`

export const ContainerDays = styled.div`
   display: flex;
   gap: 0.4rem;
`

export const Day = styled.button`
   width: 30px;
   height: 30px;
   ${({ select }) => {
      return select
         ? css`
              background: #cfcfcf;
              border: 1px solid #cfcfcf;
              color: #ffffff;
           `
         : css`
              background: #ffffff;
              border: 1px solid #d5d5d5;
              color: #dbdbdb;
           `
   }}
   border-radius: 5px;

   display: flex;
   align-items: center;
   justify-content: center;

   font-size: 19.976px;
`
export const InputCancel = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 8.4rem;
   height: 4.5rem;
   font-size: 1.8rem;
   color: #52b6ff;
   border: none;
   background: transparent;
`
export const ContainerHabits = styled.div`
   background: #ffffff;
   height: 9.1rem;
   border-radius: 5px;

   display: flex;
   flex-direction: column;
   justify-content: space-between;

   section {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-inline: 2rem;
      p {
         padding: 0;
         padding-top: 2rem;
      }
      img {
         width: 1.3rem;
         height: 1.5rem;
      }
   }
`
