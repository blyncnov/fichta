import styled from "styled-components"


export const NewsletterContainer = styled.div`
width: 100%;
position: relative;
`

export const Container = styled.div`
background-color: #fff ;
width: 100%;
position: relative;
padding: 1em;
color: white;
margin: 1em 0;
border-radius: 2px;
background-color: #0367CD;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 2px 0px;

.newsInput{
    width: 50%;
    margin: 1em 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: .5em;
    align-items: center;

@media (max-width: 768px) {
        width: 100%;
}

}

input{
    width: 100%;
   padding: 1em ;
    border: none;
    border-radius: 4px;
    background-color: white;
    color: #000;
   font-size: .9rem;
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 2px 0px;

    &:focus{
        outline: none;
    }
}

button{
    cursor: pointer;
    width: auto;
    padding: 1em 2em ;
    border: none;
    font-weight: bold;
    border-radius: 4px;
    background-color: #C60070;
    color: white;
    font-size: 1rem;
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 2px 0px;
}



 @media (max-width: 768px) {
     flex-direction: column;
 }
`

export default NewsletterContainer  ;