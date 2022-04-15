import styled from "styled-components";

export const HeadingOne  = styled.h1`
font-size: ${({size}) => size ? size : "2.5rem"};
color: ${({ color }) => color ? color : "#0069CD"};
font-family: 'Comfortaa', cursive;


@media (max-width: 768px) {
  font-size: ${({sizeM}) => sizeM ? sizeM : "2rem"};
}
`

export const Paragraph = styled.p`
line-height: 22px;
font-size: ${({size}) => size ? size : "14px"};
color: ${({ color }) => color ? color : "black"};

@media (max-width: 768px) {
  font-size: ${({ sizeM }) => sizeM ? sizeM : "14px"};
}
`

export const Title = styled.h1`
font-size: 1.5rem;
`

export const Typography = styled.h4`
font-size: {({ size }) => size ? size : "1.2rem"};
color: ${({ color }) => color ? color : "black"};
display: flex;
align-items: center;
gap: .1em;
`

export const Description = styled.p`
font-size: 1rem;
`

// Layout Components

export const Constraints = styled.div`
width: 100%;
margin: 0 auto;
max-width: ${({max}) => max ? max : "90%"};
`

// Full-width * full * to achieve full container
export const Container = styled.div`
width: 100%;
background-color: ${({ bg }) => (bg ? bg : "#F6F3FC")};
padding: ${({ padding }) => padding ? "1em" : "0"};
box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 2px 0px;

`

export const Column = styled.div`
width: 100%;
padding: 1em;
`

// Flex-Box Components * flex * to achieve flex-box
export const FlexContainer = styled.div`
display: flex;
width: 100%;
flex-direction: ${({dir}) => dir ? dir : 'row'};
align-items:  ${({ align }) => align ? align : 'center'};
padding: ${({ padding }) => padding ? "2em" : "0"};
justify-content:  ${({justify}) => justify ? justify : 'space-between'};

@media (max-width: 768px) {
flex-direction: row;
align-items:  ${({align}) => align ? align : 'center'};
}

`

// CSS Grid Components * flex * to achieve Grid box
export const GridContainer = styled.div`
gap: 2em;
width: 100%;
display: grid;
align-items: center;
justify-content: space-between;
align-items: ${({align}) => align ? align : "center"};
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

@media (max-width: 768px) {
grid-template-rows: repeat(1, 1fr);
grid-template-columns: repeat(1, 1fr);
}
`


export default Typography