import styled, { css } from "styled-components"

export const ContainerHabits = styled.div`
   background: #ffffff;
   height: 9.1rem;
   border-radius: 5px;
   padding-inline: 2rem;
   margin-bottom: 1rem;

   display: flex;
   flex-direction: column;
   justify-content: space-evenly;

   section {
      display: flex;
      align-items: center;
      justify-content: space-between;
      p {
         padding: 0;
      }
      img {
         width: 1.3rem;
         height: 1.5rem;
      }
   }
`
export const ContainerDday = styled.div`
   display: flex;
   gap: 0.4rem;
`
export const Dday = styled.div`
   width: 30px;
   height: 30px;
  
   ${({ select }) => {
      return select === 'selected'
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