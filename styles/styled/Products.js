import styled from "styled-components"


export const CategoryContainer = styled.div`
width: 100%;
position: relative;
padding: 2em 0;
// box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 2px 0px;
`

export const SectionTitle = styled.div`
width: 100%;
position: relative;
margin: 1em 0;
display: flex;
justify-content: space-between;
align-items: center;
`

export const Container = styled.div`
background-color: white ;
width: 100%;
position: relative;
padding: 2em 1em;
margin: 1em 0;
border-radius: 4px;
 box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 2px 0px;

@media (max-width: 768px) {
       padding: 2em .5em;
}


.explore{
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
            align-items: flex-start;
    }

ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
    font-weight: 500;
    color: black;
    opacity: 0.8;
    font-family: "Roboto", sans-serif;



    @media (max-width: 768px) {
       margin: .5em 0;
           font-size: 12px;
    }
}

}

`

export const CardContainer = styled.div`
gap: 2em;
width: 100%;
display: grid;
align-items: center;
justify-content: space-between;
grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

@media (max-width: 768px) {
grid-template-rows: repeat(2, 1fr);
grid-template-columns: repeat(2, 1fr);
gap: 1em;
}
`

export const Card = styled.div`
width: 100%;
position: relative;
display: grid;
align-items: center;
justify-content: space-between;
grid-template-rows: repeat(1, 1fr);
grid-template-columns: repeat(1, 1fr);
background-color: #fff;
border-radius: 4px;
box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 2px 0px;
color: black;
font-weight: bold;
transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, all 0.3s ease-in-out;
text-align: start;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 2px 0px;

   &:hover{
       background-color: #FFFCEB;
         transform: scale(1.05);
        box-shadow: 0 1px 5px 1px rgb(0 0 0 / 10%);
        border-radius: 2px 2px 0  0;
   }

   .sp{
       padding: 0 .6em;
   }

.feature-img{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1em 0;
}

h6{
    font-size: .8rem;
    color: #8D8D8D;
    font-weight: 500;
font-family: 'Comfortaa', cursive;

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

export const Buy = styled.div`
width: 100%;
height: auto;
padding: 1em ;
border: none;
border-radius: 0 0 3px 3px;
background-color: #0168CD;
color: #ffffff;
font-size: 1rem;
font-weight: bold;
cursor: pointer;
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

display: flex;
justify-content: space-between;
align-items: center;

h5{
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: .1em;
}

`


export default CategoryContainer  ;