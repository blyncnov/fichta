import styled from "styled-components"


export const FooterContainer = styled.div`
width: auto;
background-color: #0A192F;
position: relative;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
color: #fff;
padding: 1em 0;
`

export const FooterGridContainer = styled.div`
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
justify-items: space-between;
align-items: start;
gap: 2em;
`

export const FooterGridCard = styled.div`
width: 100%;
padding: 1em 0;

h1{
    color: #0566CD;
}
`


export default FooterContainer