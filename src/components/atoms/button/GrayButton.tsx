'use client'
import styled from "styled-components";
import {GRAY_1, GRAY_2} from "@/constant/color";

export default function GrayButton({onClick, title}:any){

    const GrayButtonStyle = styled.button`
        width: 160px;
        height: 50px;
        color: ${GRAY_1};
        border-radius: 15px;
        background-color: ${GRAY_2};
        border: none;
        
    `

    return (
        <GrayButtonStyle onClick={onClick} >
            {title}
        </GrayButtonStyle>
    )
}