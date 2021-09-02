import React from 'react'
import {Button} from "../ButtonElements"
import {InfoContainer,InfoWrapper, InfoRow, Column1, 
Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from "./InfoSectionElement"

const InfoSection = ({id, lightText, lightBg, topLine, headline, description,
buttonLabel, img, alt, primary, darkText, dark, imgStart}) => {
    return (
        <>
          <InfoContainer lightBg={lightBg} id={id}>
              <InfoWrapper>
                  <InfoRow imgStart={imgStart}>
                      <Column1 data-aos="fade-right">
                      <TextWrapper>
                          <TopLine>{topLine}</TopLine>
                          <Heading lightText={lightText}>{headline}</Heading>
                          <Subtitle darkText={darkText}>{description}</Subtitle>
                          <BtnWrap>
                              <Button 
                              smooth={true}
                              duration={500}
                              spy={true}
                              exact="true"
                              offset={-80}
                              to="home" dark={dark ?1:0} primary={primary ? 1:0}>{buttonLabel}</Button>
                          </BtnWrap>
                      </TextWrapper>
                      </Column1>
                      <Column2 data-aos="fade-left">
                      <ImgWrap>
                      <Img src={img} alt={alt}/>                      
                      </ImgWrap>
                      </Column2>
                  </InfoRow>
              </InfoWrapper>
              </InfoContainer>  
        </>
    )
}

export default InfoSection
