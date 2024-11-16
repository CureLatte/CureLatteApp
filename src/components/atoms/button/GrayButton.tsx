'use client'
import styled from "styled-components";
import {BLUE_DARK_2, BLUE_DARK_3, BLUE_DARK_4, GRAY_060, GRAY_085, GRAY_1, GRAY_2} from "@/constant/color";

export default function GrayButton({onClick, title, style}:any){

    const GrayButtonStyle = styled.button`
        width: 160px;
        height: 50px;
        color: ${BLUE_DARK_4};
        border-radius: 15px;
        background-color: ${BLUE_DARK_2};
        border: none;
        
    `

    return (
        <GrayButtonStyle onClick={onClick} style={style} >
            {title}
        </GrayButtonStyle>
    )
}