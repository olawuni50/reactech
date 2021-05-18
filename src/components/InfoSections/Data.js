import image1 from "../../Images/T3.svg"
import image2 from "../../Images/T4.svg";
import image3 from "../../Images/img-5.jpg";

export const homeObjOne ={
    id: "/signup",
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Design',
    headline: "Clean and SEO friendly site",
    description: "Allow us to redefine your business and project your work to the world with our premium designs",
    imgStart: false,
    buttonLabel: "Get Started",
    img:(`${image1}`),
    alt: "coding",
    dark: true,
    primary:true,
    darkText: false,
}

export const homeObjTwo ={
    id: "about",
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: 'Global Reach ',
    headline: "We help you transform your business or company to the world",
    description: "Allow us to redefine your business and project your work to the world with our premium designs",
    imgStart: true,
    buttonLabel: "Get Started",
    img:(`${image2}`),
    alt: "coding",
    dark: true,
    primary:true,
    darkText: true,
}

export const homeObjThree ={
    id: "contact",
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: "Let's Talk",
    headline: "We are live 24/7",
    description: "Allow us to redefine your business and project your work to the world with our premium designs",
    imgStart: false,
    buttonLabel: "Contact Us",
    img:(`${image3}`),
    alt: "coding",
    dark: true,
    primary:true,
    darkText: true,
}