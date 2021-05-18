import React from 'react'
import {ServiceWrapper,ServicesContainer, ServiceCard, ServicesIcon, ServicesH2, ServicesP} from "./Services2Element";
import icon1 from "../../Images/bd.svg";
import icon2 from "../../Images/wd.svg";
import icon3 from "../../Images/mr.svg";
import icon4 from "../../Images/mf.svg";

const Service1 = () => {
    return (
        <>
          <ServicesContainer>
              <ServiceWrapper>
                  <ServiceCard>
                      <ServicesIcon src={icon1}/>
                      <ServicesH2>Business Strategy</ServicesH2>
                      <ServicesP>I throw myself down among the tall grass
                          by the stream as i lie close to the earth </ServicesP>
                  </ServiceCard>
                  <ServiceCard>
                      <ServicesIcon src={icon2}/>
                      <ServicesH2>Website Development</ServicesH2>
                      <ServicesP>I throw myself down among the tall grass
                          by the stream as i lie close to the earth </ServicesP>
                  </ServiceCard>
                  <ServiceCard>
                      <ServicesIcon src={icon3}/>
                      <ServicesH2>Marketing and Reporting</ServicesH2>
                      <ServicesP>I throw myself down among the tall grass
                          by the stream as i lie close to the earth </ServicesP>
                  </ServiceCard>
                  <ServiceCard>
                      <ServicesIcon src={icon4}/>
                      <ServicesH2>Mobile App Development</ServicesH2>
                      <ServicesP>I throw myself down among the tall grass
                          by the stream as i lie close to the earth </ServicesP>
                  </ServiceCard>
                  
              </ServiceWrapper>
              </ServicesContainer>  
        </>
    )
}

export default Service1
