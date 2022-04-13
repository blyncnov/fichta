import styled from "styled-components"


export const SingleProductContainer = styled.div`
width: 100%;
position: relative;
padding: 2em 0;
display: grid;
grid-template-columns: 1fr 1fr;
gap: 1em;

@media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
}
`


export const SingleProductDivider = styled.div`
width: 100%;
position: relative;
padding: 2em 1em;
background-color: transparent;
box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 2px 0px;
`

export const Button = styled.button`
width: auto;
height: auto;
padding: 1em 2em;
border: none;
border-radius: 3px;
background-color: #0168CD;
color: #ffffff;
font-size: 1rem;
font-weight: bold;
cursor: pointer;
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`

export default SingleProductContainer  ;