import styled from "styled-components"

export const NavigationContainer = styled.div`
width: 100%;
position: relative;
background-color: #F6F3FC;
box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 2px 0px;
`

export const NavigationFlexContainer = styled.div`
width: 100%;
background-color: #F6F3FC;
padding: 2em 0;
box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 2px 0px;

display: flex;

gap: 2em;
justify-content: space-between;
align-items: center;

@media (max-width: 768px) {
    padding: 1.5em 0;
}

`

export const LogoContainer = styled.div`
width: 100%;
position: relative;
cursor: pointer;
flex-basis: 10%;
font-family: 'Comfortaa', cursive;

`

export const Search = styled.div`
position: relative;
background-color: #E2F2FF;
display: flex;
flex-basis: 60%;
align-items: center;


input{
    width: 100%;
    padding: 1em ;
    border: none;
    border-radius: 5px 0 0 5px;
    background-color: white;
    color: #000;
   font-size: .9rem;
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 2px 0px;
}

button{
    cursor: pointer;
    width: auto;
    padding: .55em 1em ;
    border: none;
    font-weight: bold;
    border-radius: .2px 5px 5px .2px;
    background-color: #C60070;
    color: white;
    font-size: 1rem;
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 2px 0px;
}

@media (max-width: 768px) {
    display: ${({ mobile }) => mobile ? "none" : "flex"};

}

`

export const Cart = styled.div`
position: relative;
flex-basis: 20%;
justify-content: space-between;
display: flex;
gap: 1em;
align-items: center;

.cart__lists{
display: flex;
flex-basis: 1;
position: relative;
gap: .3em;
align-items: center;


&:hover{
    color: #04A7FF;
}

.cart__count{
    position: absolute;
    top: -.9em;
    right: -1.1em;
    background-color: #C60070;
    color: #fff;
    border-radius: 50%;
    padding: .3em .6em;
    font-size: .8rem;
    font-weight: bold;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 2px 0px;
}

li{
    font-weight: 600;
    cursor: pointer;

    &:hover{
    color: #04A7FF;
}

}

}

@media (max-width: 768px) {
    flex: 0;

    .mobile__hide{
        display: none;
    }

    li{
      display: none;
    }
}

`

export const AdditionNavigationWrapper = styled.div`
position: relative;
background-color: #C60070;
padding: 1em 0;
box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 2px 0px;
overflow: hidden;


li{
    color: #ffffff;
    font-weight: 500;
    cursor: pointer;
}

.lists{
    display: flex;
    gap: 1em;

span{
    color: white;
}

}

@media (max-width: 768px) {
        display: none;
}
`

export default NavigationContainer  ;