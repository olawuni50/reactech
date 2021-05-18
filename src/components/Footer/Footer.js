import React from 'react'
import {FaFacebook, FaGithub, FaTwitter, FaLinkedin} from "react-icons/fa"
import {animateScroll as scroll} from "react-scroll";
import {FooterContainer, FooterWrap, FooterLinksWrapper,
FooterLinkItems,FooterLinkTitle, FooterLink,SocialIconLink, 
SocialIcons, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, FooterLinksContainer} from "./FooterElements"

const Footer = () => {
    const toggleHome =()=>{
        scroll.scrollToTop()
    }
    return (
        <>
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Quick Link</FooterLinkTitle>
                                <FooterLink to="about">About Us</FooterLink>
                                <FooterLink to="services">Services</FooterLink>
                                <FooterLink to="projects">Projects</FooterLink>
                                <FooterLink to="/signin">Sign In</FooterLink>
                        
                        </FooterLinkItems>
                        
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Office in Nigeria</FooterLinkTitle>
                                <FooterLink>23b Adeniji Close, Lekki phase 1, Lagos State</FooterLink>
                                <FooterLink>+2348118320256</FooterLink>
                                <FooterLink>Mon-Sat: 8:00AM - 5:00PM</FooterLink>
                        </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                        <FooterLinkItems>
                        <FooterLinkTitle>Our Services</FooterLinkTitle>
                        <FooterLink>Website Development</FooterLink>
                        <FooterLink>Mobile App Development</FooterLink>
                        <FooterLink>Trainings</FooterLink>
                        <FooterLink>Business Branding</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
          
                   <SocialMedia>
                   <SocialMediaWrap>
                       <SocialLogo to="/" onClick={toggleHome}>
                           ReactTech
                       </SocialLogo>
                       <SocialIcons>
                       <SocialIconLink href="/" target="_blank" arial-label="Facebook"><FaFacebook/></SocialIconLink>
                       <SocialIconLink href="/" target="_blank" arial-label="Github"><FaGithub/></SocialIconLink>
                       <SocialIconLink href="/" target="_blank" arial-label="Twitter"><FaTwitter/></SocialIconLink>
                       <SocialIconLink href="/" target="_blank" arial-label="LinkedIn"><FaLinkedin/></SocialIconLink>
                           </SocialIcons>
                           
                           <WebsiteRights>ReactTech {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>
                   </SocialMediaWrap>
               </SocialMedia>
               </FooterWrap>
               </FooterContainer> 
               
        </>
    )
}

export default Footer
