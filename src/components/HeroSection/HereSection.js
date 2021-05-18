import React, {useState, useEffect, useRef} from 'react'
import { Button } from '../ButtonElements'
import { HeroSection, HeroWrapper, HeroSlide, HeroSlider,
HeroContent, HeroImage, ArrowForward, ArrowRight, SliderButton, PrevArrow,
NextArrow} from './HeroSectionElement'


const HereSection = ({slides}) => {
    const [hover, setHover]=useState(false);
    const [current, setCurrent] = useState(0)
    const length = slides.length;
    const timeout =useRef(null)

   useEffect(()=>{
       const nextSlide = ()=>{
           setCurrent(current => current===length - 1 ? 0 : current + 1)
       }
       timeout.current=setTimeout(nextSlide, 3500)

       return function(){
           if(timeout.current){
               clearTimeout(timeout.current)
           }
       }

   },[current, length])

    const nextSlide=()=>{
        if(timeout.current){
            clearTimeout(timeout.current)
        }
        setCurrent(current === length-1? 0:current + 1)
        // console.log(current)
    }

    const prevSlide=()=>{
        if(timeout.current){
            clearTimeout(timeout.current)
        }
        setCurrent(current === 0 ? length - 1 : current - 1)
        // console.log(current)
    }

    if(!Array.isArray(slides) || slides.length <= 0){
        return null
    }

    const onHover=()=>{
        setHover(!hover)
    }
    return (
        <>
      <HeroSection>
          <HeroWrapper>
              {slides.map((slide, index)=>{
                  return(
                      <HeroSlide key={index}>
                          {index === current && (
                              <HeroSlider>
                              <HeroImage src={slide.image} alt={slide.alt}/>
                              <HeroContent>
                                  <h1>{slide.title}</h1>
                                  <p>{slide.text}</p>
                                  <Button to={slide.path} primary="true" dark="true" 
                                  onMouseLeave={onHover} onMouseEnter={onHover} fontBg="true">
                                      {slide.label} {hover ? <ArrowForward/>:<ArrowRight/>}
                                </Button> 
                              </HeroContent>
                          </HeroSlider>


                          )}
                          
                      </HeroSlide>
                  )
              })}
              <SliderButton>
                  <PrevArrow onClick={prevSlide}/>
                  <NextArrow onClick={nextSlide}/>
              </SliderButton>
          </HeroWrapper>
          
          </HeroSection>      
        </>
    )
}

export default HereSection
