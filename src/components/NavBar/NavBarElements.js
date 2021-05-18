import styled from "styled-components"
import {Link as LinkR} from "react-router-dom";
import {Link as LinkS} from "react-scroll"
import {motion} from "framer-motion";

export const Nav = styled.nav`
background: ${({scrollNav})=>(scrollNav ? "#000": "transparent")};
height: 80px;
display: flex;
justify-content: center;
align-items: center;
z-index: 10;
position:sticky;
font-size: 1.5rem;
top:0;
margin-top: -80px;


@media screen and (max-width: 960px){
    transition: 0.8s all ease;
}
`;

export const NavbarContainer = styled.div`
display:flex;
height: 80px;
justify-content: space-between;
align-items: center;
width: 100%;
z-index: 1;   
padding: 0 24px;
margin-left: 1px;
max-width: auto;
`

export const NavbarLogo = styled(motion.LinkR)`
color: #01bf71;
justify-self: flex-start;
font-size: 2rem;
display: flex;
cursor: pointer;
align-items: center;
margin-left: 32px;
font-weight: bold;
text-decoration: none;
`;

export const MobileIcon= styled.div`
display: none;

@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff
}
`;

export const NavbarMenu=styled.ul`
display:flex;
align-items:center;
list-style: none; 
text-align: center;
margin-right: -22px;
/* justify-content: space-between; */

@media screen and (max-width: 768px){
    display: none;
}
`;

export const NavbarItem = styled.li`
height: 80px;
`

export const NavbarLinks = styled(LinkS)`
color: #fff;
font-size: 20px;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;


&.active{
    border-bottom: 3px solid #01bf71;
}
`
export const NavBtn=styled.nav`
display: flex;
align-items: center;


@media screen and (max-width: 768px){
    display: none
}
`

export const NavbtnLink = styled(LinkR)`
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
padding: 10px 22px;
color: #010606;
font-size: 20px;
outline: none;
border:none;
text-decoration: none;
transition: all 0.2s ease-in-out;
cursor: pointer;


&:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
`