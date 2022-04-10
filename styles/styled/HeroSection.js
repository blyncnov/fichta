import styled from "styled-components"


export const HeroSectionContainer = styled.div`
width: 100%;
position: relative;
box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 2px 0px;
`

export const Container = styled.div`
width: 100%;
position: relative;
padding: 2em 0;

`

export const GridContainer = styled.div`
gap: 3em;
width: 100%;
display: grid;
align-items: center;
justify-content: space-between;
align-items: center;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

@media (max-width: 768px) {
grid-template-rows: repeat(1, 1fr);
grid-template-columns: repeat(1, 1fr);
}
`

export const Divider = styled.div`
width: 100%;
position: relative;
`

export const Button = styled.button`
width: auto;
height: auto;
padding: 1em 2em;
border: none;
border-radius: 3px;
background-color: #C5006F;
color: #ffffff;
font-size: 1rem;
font-weight: bold;
cursor: pointer;

`

export default HeroSectionContainer  ;