import styled from "styled-components"

export const ServicesContainer = styled.section`
height: auto;
margin-bottom: 3rem;
/* background: #dedede; */
`

export const ServiceH1 = styled.h1`
text-align: center;
margin-top: 2rem;
`

export const ServiceWrapper = styled.div`
max-width: 1100px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 1rem;
margin-top: 2rem;

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    max-width: 300px;
}
`


export const ServiceCard = styled.div`
border: 2px solid #dedede;
padding: 10px;
line-height: 1.4;
border-radius: 10px;
box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);

&:hover{
    transform: scale(0.98);
}
`

export const ServicesH2 = styled.h3`
color:#19318F;
box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
padding: 10px;
`

export const ServicesP = styled.p`
text-align: justify;
`

