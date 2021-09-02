import styled from "styled-components"
import {Link} from "react-scroll"

export const FooterContainer = styled.div`
background-color: #101522;
`

export const FooterWrap = styled.div`
padding: 48px 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1100px;
margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
display: flex;
justify-content: center;

@media screen and (max-width: 820px){
    padding-top: 32px;
}
`

export const FooterLinksWrapper= styled.div`
display: flex;

@media screen and (max-width: 820px){
    flex-direction: column;
}
`;

export const FooterLinkItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 16px;
text-align: left;
width: 260px;
box-sizing: border-box;
color: #fff;

@media screen and (max-width: 420px){
    margin:0;
    padding: 10px;
    width: 100%;
}


`
export const FooterLinkTitle = styled.h1`
font-size: 1.3rem;
margin-bottom: 16px;
color: #01bf71;

/* iPad */
@media screen and (max-width: 768px){
     font-size: 1.2rem;
     /* max-width:100px; */
}

`
export const FooterTitle = styled.h1`
font-size: 1.4rem;
margin-bottom: 16px;
color: #01bf71;

@media screen and (max-width: 768px){
    font-size: 16px;
}
`
export const FooterText = styled.div`
color: #fff;
text-decoration: none;
margin-bottom: 0.5rem;
font-size: 16px;
`


export const FooterLink = styled(Link)`
color: #fff;
text-decoration: none;
margin-bottom: 0.5rem;
font-size: 1rem;
cursor: pointer;

&:hover{
    color: #01bf71;
    transition: 0.3s ease-out
}

@media screen and (max-width: 768px){
    font-size: 1rem;
}

@media screen and(max-width: 480px){
    font-size: 1rem;
}
`;

export const SocialMedia = styled.section`
max-width: 1000px;
width: 100%;
`;

export const SocialMediaWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1100px;
margin: 40px auto 0 auto;

@media screen and (max-width:820px){
    flex-direction: column;
}
`;

export const SocialLogo = styled(Link)`
color: #fff;
justify-self: start;
cursor: pointer;
text-decoration:none;
font-size: 2rem;
display: flex;
align-items: center;
margin-bottom: 16px;
font-weight: bold;

&:hover{
    color: #01bf71;
    transition: 0.3s ease-out
}
`;

export const WebsiteRights = styled.small`
color: #fff;
margin-top: 20px;
margin-bottom: 16px;
font-size: 1rem;
`;


export const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;
`;

export const SocialIconLink = styled.a`
color: #fff;
font-size: 24px;

&:hover{
    color: #01bf71;
    transition: 0.3s ease-out
}
`