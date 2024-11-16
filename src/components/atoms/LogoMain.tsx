'use client'
import styled from 'styled-components'
import LogoSvg from '../../../public/images/logo.png'
import {BLUE_DARK_0, BLUE_DARK_1, BLUE_DARK_2, BLUE_DARK_3, BLUE_DARK_4, GRAY_090} from "@/constant/color";


export const LogoMainStyle = styled.div`
    width: 350px;
    height: 150px;
    // background-image: url('/images/logo.png');
    // background-position: center;
    // background-size: 150%;
    font-weight: bold;
    font-size: 40px;
    text-align: center;
    align-content: center;
    background-color: transparent;
    color: ${BLUE_DARK_4};
    border-bottom: ${BLUE_DARK_4} 10px solid ;
    border-top: ${BLUE_DARK_4} 10px solid ;
    
`
export default function LogoMain(){
    return(
        <LogoMainStyle>CURRENT.JS</LogoMainStyle>
    )
}