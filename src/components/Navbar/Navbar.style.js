import styled, { css } from "styled-components"

export const ContainerNavbar = styled.div`
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