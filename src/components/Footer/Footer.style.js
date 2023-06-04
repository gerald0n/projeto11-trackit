import styled from "styled-components"

export const ContainerFooter = styled.footer`
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