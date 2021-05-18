import React from 'react'
import {SideContainer, Icon, CloseIcon, SideWrapper,
SideMenu, SideLink, Sidebtn, SideRoute} from "./SidebarElements"


const Sidebar = ({isOpen, toggle}) => {
    return (
        <SideContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SideWrapper>
                <SideMenu>
                    <SideLink to="home" onClick={toggle}>Home</SideLink>
                    <SideLink to="services" onClick={toggle}>Services</SideLink>
                    <SideLink to="projects" onClick={toggle}>Projects</SideLink>
                    <SideLink to="about" onClick={toggle}>About Us</SideLink>
                    <SideLink to="contact" onClick={toggle}>Contact Us</SideLink>
                </SideMenu>
                <Sidebtn>
                    <SideRoute to="/signin">Sign In</SideRoute>
                </Sidebtn>
            </SideWrapper>
            
        </SideContainer>

    )
}

export default Sidebar
