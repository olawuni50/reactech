import React from 'react'
import {ServicesContainer, ServicesH2, ServiceH1,
ServiceWrapper, ServiceCard,  ServicesP} from "./ServicesElement"
import {MdDeveloperMode} from "react-icons/md"
import {RiAdvertisementFill} from "react-icons/ri"
import {FaMobileAlt, FaDeploydog} from "react-icons/fa"
import {CgWebsite} from "react-icons/cg"
import {SiMicrostrategy} from "react-icons/si"


const Services = () => {
    return (
        <>
          <ServicesContainer id="services">
              <ServiceH1 data-aos="zoom-in">Our Services</ServiceH1>
              <ServiceWrapper>

<ServiceCard data-aos="flip-right">                   
       <ServicesH2> <FaDeploydog style={{fontSize:"26px", marginRight:"1rem"}}/> Seamless Deployment</ServicesH2>
       <ServicesP>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
Aliquam enim hic distinctio corporis aspernatur Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
Aliquam enim hic distinctio corporis aspernatur possimus  </ServicesP>
   </ServiceCard>

   <ServiceCard data-aos="flip-right">                   
       <ServicesH2> <CgWebsite style={{fontSize:"26px", marginRight:"1rem"}}/>Website Maintainance</ServicesH2>
       <ServicesP>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
Aliquam enim hic distinctio corporis aspernatur Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
Aliquam enim hic distinctio corporis aspernatur possimus  </ServicesP>
   </ServiceCard>
    
     <ServiceCard data-aos="flip-right">                   
       <ServicesH2> <SiMicrostrategy style={{fontSize:"26px", marginRight:"1rem"}}/> Business Strategy</ServicesH2>
       <ServicesP>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
Aliquam enim hic distinctio corporis aspernatur Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
Aliquam enim hic distinctio corporis aspernatur possimus  </ServicesP>
   </ServiceCard>

   <ServiceCard data-aos="flip-right">
        <ServicesH2> <MdDeveloperMode style={{fontSize:"26px", marginRight:"1rem"}}/>Website Development</ServicesH2>
       <ServicesP>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
Aliquam enim hic distinctio corporis aspernatur Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
Aliquam enim hic distinctio corporis aspernatur possimus  </ServicesP>
  </ServiceCard>

   <ServiceCard data-aos="flip-right">
        <ServicesH2> <RiAdvertisementFill style={{fontSize:"26px", marginRight:"1rem"}}/> Marketing and Reporting</ServicesH2>
       <ServicesP>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
Aliquam enim hic distinctio corporis aspernatur Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
Aliquam enim hic distinctio corporis aspernatur possimus  </ServicesP>
   </ServiceCard>

   <ServiceCard data-aos="flip-right">
       <ServicesH2> <FaMobileAlt style={{fontSize:"26px", marginRight:"1rem"}}/> Mobile App Development</ServicesH2>
       <ServicesP>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
Aliquam enim hic distinctio corporis aspernatur Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
Aliquam enim hic distinctio corporis aspernatur possimus  </ServicesP>
   </ServiceCard>


              </ServiceWrapper>
              
     </ServicesContainer>   
        </>
    )
}

export default Services
