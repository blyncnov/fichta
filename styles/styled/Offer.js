import styled from "styled-components"


export const OverAllOfferContainer = styled.div`
width: 100%;
position: relative;
// box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 2px 0px;
`

export const Container = styled.div`
background-color: #fff ;
width: 100%;
position: relative;
padding: 1em;
color: white;
margin: 1em 0;
border-radius: 2px;
//  box-shadow: rgba(0, 0, 0, 0.06) 0px 4px 4px 0px;


 @media (max-width: 768px) {
     flex-direction: column;
 }
`
export const OffersContainer = styled.div`
width: 100%;
position: relative;
// box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 2px 0px;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
color: #333;
gap: 2em;

@media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);

}
`

export const OffersCard = styled.div`
width: 100%;
position: relative;
box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 2px 0px;
background-color: #fff;
padding: 1em;
border-radius: 2px;
  transition: all 0.3s ease-in-out;


&:hover{
    box-shadow: rgba(0, 0, 0, 0.06) 0px 4px 4px 0px;
    transform: translate(-5px, 5px);


}
`

export default OverAllOfferContainer  ;