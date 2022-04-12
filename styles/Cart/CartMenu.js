import styled from "styled-components"

export const Splitter = styled.div`
width: 100%;
 padding: 2em 1em;
 margin: 1em 0;
 display: grid;
grid-template-columns: 2fr 1fr;
gap: 1em;

@media (max-width: 768px) {
grid-template-rows: 1fr;
grid-template-columns: 1fr;
}
`

export const CartContainer = styled.div`
width: 100%;
 padding: 2em 1em;
box-shadow: 0 1px 5px 1px rgb(0 0 0 / 10%);

`

export const CartGrid = styled.div`
width: 100%;
gap: 2em;
padding: 1em ;
display: grid;
align-items: center;
justify-content: space-between;
grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

@media (max-width: 768px) {
grid-template-rows: repeat(1, 1fr);
grid-template-columns: repeat(1, 1fr);
gap: 1em;
}
`

export const CartInfomation = styled.div`
width: 100%;
display: grid;
grid-template-columns: 2fr 1fr;
align-items: center;
gap: 2em;
justify-content: space-between;


@media (max-width: 768px) {
grid-template-rows: 1fr;
grid-template-columns: 1fr;
}

`

export const CartImageText = styled.div`
width: 100%;
display: grid;
grid-template-columns: 1fr 2fr;
align-items: center;
justify-content: space-between;
gap: 2em;

@media (max-width: 768px) {
grid-template-columns: 1fr 2fr;
}

`

export const CartPricing = styled.div`
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;
justify-content: space-between;
gap: 2em;

@media (max-width: 768px) {
grid-template-columns: 1fr 2fr;
}
`

export const CartGridCard = styled.div`
width: 100%;
position: relative;
display: grid;
align-items: center;
justify-content: space-between;
grid-template-rows: repeat(1, 1fr);
grid-template-columns: repeat(1, 1fr);
background-color: #fff;
border-radius: 4px;
color: black;
font-weight: bold;
transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, all 0.3s ease-in-out;
text-align: start;

.control{
    display: flex;
    gap: .5em;
    align-items: center;

button{
padding: .5em .8em;
border: none;
border-radius: 3px;
background-color: #C60A70;
color: #ffffff;
font-size: 1rem;
font-weight: bold;
cursor: pointer;
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}

}

   &:hover{
    //    background-color: #FFFCEB;
        // box-shadow: 0 1px 5px 1px rgb(0 0 0 / 10%);
        // border-radius: 2px 2px 0  0;
   }
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

export default CartContainer;