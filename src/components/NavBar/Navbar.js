import React, {useState, useEffect} from 'react'
import {Nav, NavbarContainer, NavbarLogo,MobileIcon,
NavbarMenu, NavbarItem, NavbarLinks, NavbtnLink, NavBtn} from "./NavBarElements"
import {FiAlignRight} from "react-icons/fi";
import {animateScroll as scroll} from "react-scroll"


const Navbar = ({toggle}) => {
    const[scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=>{
        if(window.scrollY >=80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }
     useEffect(()=>{
         window.addEventListener("scroll", changeNav)
     }, [])

     const toggleHome =()=>{
         scroll.scrollToTop()
     }

    
    
    return (
        <>
          <Nav scrollNav={scrollNav}>
              <NavbarContainer>
                  
                  <NavbarLogo to="/" onClick={toggleHome}
                  initial={{y:-250}}
                  animate={{y:-1}}
                  transition={{delay: 1, type:"spring", stiffness:120}}>ReactTech</NavbarLogo>
                  <MobileIcon onClick={toggle}>
                      <FiAlignRight/>
                  </MobileIcon>
                  <NavbarMenu>
                    <NavbarItem>
                        <NavbarLinks to="/" smooth={true} duration={500} spy={true} exact="true"
                    offset={-80} onClick={toggleHome}>Home</NavbarLinks>
                    </NavbarItem>
                    <NavbarItem>
                        <NavbarLinks to="about" smooth={true} duration={500} spy={true} exact="true"
                    offset={-80} >About Us</NavbarLinks>
                    </NavbarItem> 
                    <NavbarItem>
                        <NavbarLinks to="services" smooth={true} duration={500} spy={true} exact="true"
                    offset={-80} >Services</NavbarLinks>
                    </NavbarItem>
                    <NavbarItem>
                        <NavbarLinks to="contact" smooth={true} duration={500} spy={true} exact="true"
                    offset={-80} >Contact Us</NavbarLinks>
                    </NavbarItem>                                
                  </NavbarMenu>

                  <NavBtn>
                        <NavbtnLink to="/signin">Sign In</NavbtnLink>
                    </NavBtn>
    
              </NavbarContainer>
              
              </Nav>  
        </>
    )
}

export default Navbar
