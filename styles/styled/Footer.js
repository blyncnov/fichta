import styled from "styled-components"


export const FooterContainer = styled.div`
width: auto;
background-color: #0B192E;
position: relative;
color: #fff;
padding: 1em 0;
`

export const FooterGridContainer = styled.div`
width: 100%;
display: grid;
grid-template-columns: 2fr 1fr 1fr;
justify-items: space-between;
align-items: start;
gap: 2em;

@media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0;
}
`

export const FooterGridCard = styled.div`
width: 100%;
padding: 1em 0;

h1{
    color: #0566CD;
}

li{
    font-family: monospace;
}

`


export default FooterContainer