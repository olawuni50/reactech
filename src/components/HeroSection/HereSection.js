// import React, {useState, useEffect, useRef} from 'react'
// import { Button } from '../ButtonElements'
// import { HeroSection, HeroWrapper, HeroSlide, HeroSlider,
// HeroContent, HeroImage, ArrowForward, ArrowRight, SliderButton, PrevArrow,
// NextArrow} from './HeroSectionElement'


// const HereSection = ({slides}) => {
//     const [hover, setHover]=useState(false);
//     const [current, setCurrent] = useState(0)
//     const length = slides.length;
//     const timeout =useRef(null)

//    useEffect(()=>{
//        const nextSlide = ()=>{
//            setCurrent(current => current===length - 1 ? 0 : current + 1)
//        }
//        timeout.current=setTimeout(nextSlide, 3500)

//        return function(){
//            if(timeout.current){
//                clearTimeout(timeout.current)
//            }
//        }

//    },[current, length])

//     const nextSlide=()=>{
//         if(timeout.current){
//             clearTimeout(timeout.current)
//         }
//         setCurrent(current === length-1? 0:current + 1)
//         // console.log(current)
//     }

//     const prevSlide=()=>{
//         if(timeout.current){
//             clearTimeout(timeout.current)
//         }
//         setCurrent(current === 0 ? length - 1 : current - 1)
//         // console.log(current)
//     }

//     if(!Array.isArray(slides) || slides.length <= 0){
//         return null
//     }

//     const onHover=()=>{
//         setHover(!hover)
//     }
//     return (
//         <>
//       <HeroSection>
//           <HeroWrapper>
//               {slides.map((slide, index)=>{
//                   return(
//                       <HeroSlide key={index}>
//                           {index === current && (
//                               <HeroSlider>
//                               <HeroImage src={slide.image} alt={slide.alt}/>
//                               <HeroContent>
//                                   <h1>{slide.title}</h1>
//                                   <p>{slide.text}</p>
//                                   <Button to={slide.path} primary="true" dark="true" 
//                                   onMouseLeave={onHover} onMouseEnter={onHover} fontBg="true">
//                                       {slide.label} {hover ? <ArrowForward/>:<ArrowRight/>}
//                                 </Button> 
//                               </HeroContent>
//                           </HeroSlider>


//                           )}
                          
//                       </HeroSlide>
//                   )
//               })}
//               <SliderButton>
//                   <PrevArrow onClick={prevSlide}/>
//                   <NextArrow onClick={nextSlide}/>
//               </SliderButton>
//           </HeroWrapper>
          
//           </HeroSection>      
//         </>
//     )
// }

// export default HereSection

import React from "react"
import { HeroContainer, HeroWrapper, HeroContent, HeroHead, HeroP, 
HeroImage, Image, HeroBtn, Button } from "./HeroSectionElement"
import img from "../../Images/ph.png"

const HereSection = () =>{
    return(
        <HeroContainer>
            <HeroWrapper>
                <HeroContent data-aos="fade-right">
                    <HeroHead>We are the best technology company, our designs are top Notch</HeroHead>
                    <HeroP>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Aliquam enim iure alias nulla mollitia soluta hic distinctio
                 corporis aspernatur possimus Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Aliquam enim iure alias nulla mollitia soluta hic distinctio
                 corporis aspernatur possimus</HeroP>

                 <HeroBtn>
                     <Button>Get Started</Button>
                 </HeroBtn>
                </HeroContent>

                <HeroImage data-aos="fade-left">
                    <Image src={img} alt="phone"/>
                </HeroImage>
            </HeroWrapper>
        </HeroContainer>

    )
}

export default HereSection