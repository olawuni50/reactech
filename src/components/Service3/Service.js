import React from 'react'
import img from "../../Images/p.png"
import { ServiceContainer, ServiceWrapper, ServiceText, ServiceHead,
ServiceP, ServiceImage, Image, ServiceBtn, Button } from './ServiceElement'

const Service = () => {
    return (
        <ServiceContainer>
            <ServiceWrapper>
                <ServiceText data-aos="fade-right">
                <ServiceHead>Our experience makes us to deliver the best technology</ServiceHead>
                <ServiceP> Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Aliquam enim iure alias nulla mollitia soluta hic distinctio
                 corporis aspernatur possimus Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Aliquam enim iure alias nulla mollitia soluta hic distinctio
                 corporis aspernatur possimus  dolor sit amet consectetur adipisicing elit. </ServiceP>

                 <ServiceBtn>
                     <Button>Let's Start</Button>
                 </ServiceBtn>
                 </ServiceText>

                 <ServiceImage data-aos="fade-left">
                    <Image src={img} alt="tech"/>
                </ServiceImage>

            </ServiceWrapper>
        </ServiceContainer>
    )
}

export default Service
