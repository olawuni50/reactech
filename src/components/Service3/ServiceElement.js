import styled from "styled-components"

export const ServiceContainer = styled.section`
background:  #01bf71;
height: auto;
/* margin-bottom: 3rem; */
`

export const ServiceWrapper = styled.div`
max-width: 1100px;
margin: 0 auto;
display:flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 768px){
    flex-direction: column;
    max-width: 300px;
}
`

export const ServiceText = styled.div`
line-height: 1.3;
max-width: 400px;

@media screen and (max-width: 768px){
    margin-top: 2rem;
}
`

export const ServiceHead = styled.h1`
padding-bottom: 10px;
font-size: 30px;
`

export const ServiceP = styled.p`
line-height: 1.5;
text-align: justify;
`

export const ServiceBtn = styled.div`
margin-top: 1.4rem;
`

export const Button = styled.button`
padding: 10px;
outline: none;
border: none;
cursor: pointer;
border-radius: 10px;
color: #fff;
background: red;
box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);

&:hover{
    transform: scale(0.98)
}
`

export const ServiceImage = styled.div`

`

export const Image = styled.img`
width: 100%
`
