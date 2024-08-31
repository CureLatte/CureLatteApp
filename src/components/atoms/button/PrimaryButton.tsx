'use client'
import styled from "styled-components";
import {PRIMARY_2, PRIMARY_3} from "@/constant/color";

export default function PrimaryButton({onClick, style, title}: any) {
    const PrimaryButtonStyle = styled.button`
        background-color: ${PRIMARY_3};
        width: 160px;
        height: 50px;
        border-radius: 15px;
        border:none;
        color: white;
    `

    return (
        <PrimaryButtonStyle onClick={onClick} style={style}>
            {title}
        </PrimaryButtonStyle>
    )
}