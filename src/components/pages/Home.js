import React, {useState} from 'react'
import Footer from '../Footer/Footer'
import HereSection from '../HeroSection/HereSection'
import { SliderData } from '../HeroSection/SliderData'
import { homeObjOne, homeObjTwo, homeObjThree } from '../InfoSections/Data'
import InfoSection from '../InfoSections/InfoSection'
import Navbar from '../NavBar/Navbar'
import Service from '../Service3/Service'
import Services from '../Services/Services'
import Service1 from '../Services2/Service1'
import Sidebar from '../Sidebar/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle=()=>{
        setIsOpen(!isOpen)
    }
    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HereSection slides={SliderData}/>
            <Service1/> 
            <Service /> 
            <InfoSection {...homeObjTwo}/>  
            <InfoSection {...homeObjOne}/>
            
            <Services/>
            <InfoSection {...homeObjThree}/>
            <Footer/>
        
        </>
    )
}

export default Home
