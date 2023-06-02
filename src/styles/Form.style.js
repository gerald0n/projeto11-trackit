import styled, { css } from 'styled-components'

export const Container = styled.div`
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   height: 100%;
   padding-top: 6.8rem;
   overflow: hidden;
   background: #ffffff;
`
export const Image = styled.img`
   width: 18rem;
   height: 18rem;
`
export const FormLogin = styled.form`
   display: flex;
   flex-direction: column;
   gap: 0.6rem;
   margin-block: 3.3rem;
`

export const RegisterLink = styled.a`
   font-style: normal;
   font-weight: 400;
   font-size: 13.976px;
   line-height: 17px;
   text-align: center;
   text-decoration-line: underline;
   cursor: pointer;
   color: #52b6ff;

   ${({ disabled }) => {
      return disabled
         ? css`
              pointer-events: none;
              opacity: 0.7;
           `
         : css`
              pointer-events: all;
           `
   }};
`

export const Input = styled.input`
   height: 4.5rem;

   background-color: #ffffff;
   color: ${({context}) => {
      return (context === 'homepage') ? '#666666' : '#000000'
   }};
   text-align: left;

   border: 1px solid #d5d5d5;
   border-radius: 5px;
   padding-inline: 1.1rem;

   font-family: 'Lexend Deca';
   font-size: 2rem;
   line-height: 2.6rem;

   &::placeholder {
      color: #dbdbdb;
   }

   &:disabled {
      background: #f2f2f2;
      color: #afafaf;
   }
`

export const InputButton = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;

   background-color: #52b6ff;
   color: #ffffff;

   width: ${({length}) => {
      return (length === 'secondary') ? '8.4rem' : '30rem' 
   }};
   height: 4.5rem;
   border: 1px solid #d5d5d5;
   border-radius: 5px;
   padding-inline: 1.1rem;

   font-size: ${({length}) => {
      return (length === 'secondary') ? '1.8rem' : '2rem' 
   }};;
   line-height: 2.6rem;
   cursor: pointer;

   &:disabled {
      background: #52b6ff;
      opacity: 0.7;
      cursor: default;
   }
`
