import React from 'react'
import {ServicesContainer, ServicesH2, ServiceH1,
ServiceWrapper, ServiceCard, ServicesIcon,
ServicesP} from "./ServicesElement"
import Icon1 from "../../Images/T2.svg"
import Icon2 from "../../Images/T1.svg"
import Icon3 from "../../Images/T4.svg"
const Services = () => {
    return (
        <>
          <ServicesContainer id="services">
              <ServiceH1>Our Services</ServiceH1>
              <ServiceWrapper>
                  <ServiceCard>
                      <ServicesIcon src={Icon1}/>
                      <ServicesH2>Reduce Expenses</ServicesH2>
                      <ServicesP>We help reduce your fees and increase your overall
                          revenue
                      </ServicesP>
                  </ServiceCard>
                  <ServiceCard>
                      <ServicesIcon src={Icon2}/>
                      <ServicesH2>Premium Benefits</ServicesH2>
                      <ServicesP>Unlock our special membership card that returs 5% cash back.</ServicesP>
                  </ServiceCard>
                  <ServiceCard>
                      <ServicesIcon src={Icon3}/>
                      <ServicesH2>Virtual Offices</ServicesH2>
                      <ServicesP>We help reduce your fees and increase your overall
                          revenue
                      </ServicesP>
                  </ServiceCard>
              </ServiceWrapper>
              
     </ServicesContainer>   
        </>
    )
}

export default Services
