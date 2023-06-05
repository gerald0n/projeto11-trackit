import styled, { css } from "styled-components"

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
`

export const ContainerDays = styled.div`
   display: flex;
   gap: 0.4rem;
`

export const Day = styled.button`
   width: 30px;
   height: 30px;
   ${({ select }) =>
      select
         ? css`
              background: #cfcfcf;
              border: 1px solid #cfcfcf;
              color: #ffffff;
           `
         : css`
              background: #ffffff;
              border: 1px solid #d5d5d5;
              color: #dbdbdb;
           `}
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
   height: 4.5rem;
   font-size: 1.8rem;
   color: #52b6ff;
   border: none;
   background: transparent;

   &:disabled {
      opacity: 0.8;
   }
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

      &:disabled {
         background-color: #4f84a7;
         color: #ddddcd;
      }
   }
`
