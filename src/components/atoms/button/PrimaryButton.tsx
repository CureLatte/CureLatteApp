'use client'
import styled from "styled-components";
import {BLUE_DARK_3, BLUE_DARK_4, DEEP_SKY_BLUE, GRAY_005, GRAY_015, PRIMARY_2, PRIMARY_3} from "@/constant/color";

export default function PrimaryButton({onClick, style, title}: any) {
    const PrimaryButtonStyle = styled.button`
        background-color: ${BLUE_DARK_4};
        width: 160px;
        height: 50px;
        border-radius: 15px;
        border:none;
        color: ${GRAY_015};
    `

    return (
        <PrimaryButtonStyle onClick={onClick} style={style}>
            {title}
        </PrimaryButtonStyle>
    )
}