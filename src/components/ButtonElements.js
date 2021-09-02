import styled from "styled-components"
import {Link} from "react-scroll"

export const Button = styled(Link)`
border-radius:10px;
background: ${({primary})=>(primary ? "red": "#010606")};
white-space: nowrap;
padding: ${({big})=>(big ? '14px 20px': '10px 10px')};
color: ${({dark})=>(dark ? "#fff" : "#fff")};
font-size: ${({fontBg})=>(fontBg ? "20px" : "16px")};
outline: none;
border:  none;
cursor: pointer;
display: flex;
max-width: 160px;
justify-content: center;
align-items: center;
text-decoration: none;
transition: all 0.2s ease-in-out;
box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);

&:hover{
    /* transition: all 0.2 ease-in-out;
    background: ${({primary})=>(primary ? "#fff":"#01BF71")} */
    transform: scale(0.98)
}
`