import styled from "styled-components"


export const AdvertContainer = styled.div`
width: 100%;
position: relative;
box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 2px 0px;
`

export const Container = styled.div`
background-color: #0171DC ;
width: 100%;
position: relative;
padding: 1em;
color: white;
margin: 1em 0;
border-radius: 4px;
 box-shadow: rgba(0, 0, 0, 0.06) 0px 4px 4px 0px;
 text-align: center;
 display: flex;
 gap: 1em;
 justify-content: center;

 a{
     color: white;
     text-decoration: underline;
     font-family: 'Comfortaa', cursive;
 }


 @media (max-width: 768px) {
     flex-direction: column;
 }
`

export default AdvertContainer  ;