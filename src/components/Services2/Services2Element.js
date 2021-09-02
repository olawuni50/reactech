import styled from "styled-components"

export const ServiceContainer = styled.section`
height: auto;
margin-bottom: 3rem;
`

export const ServiceWrapper = styled.div`
max-width: 1100px;
margin: 0 auto;
display:flex;
justify-content: space-between;

@media screen and (max-width: 768px){
    max-width: 300px;
}
`

export const Service = styled.div`
max-width: 650px;
`

export const ServiceContent = styled.div`
margin-bottom: 2rem;
`

export const ServiceHead = styled.h1`
line-height: 1.2;
padding-bottom: 10px;

`
export const ServiceP = styled.p`
line-height: 1.7;
text-align: justify;
`


