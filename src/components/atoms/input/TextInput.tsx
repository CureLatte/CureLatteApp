'use client'

import styled from "styled-components";
import {
    BLUE_DARK_1,
    BLUE_DARK_2,
    GRAY_010,
    GRAY_015,
    GRAY_040, GRAY_060,
    GRAY_090,
    GRAY_1,
    GRAY_2,
    PRIMARY_2
} from "@/constant/color";


export default function TextInput ({width, placeholder, type} : any) {

    const TextInputStyle = styled.input`
        width: calc(${width? width : "100%"} - 20px);
        border: solid #DFEAF2 1px;
        height: 50px;
        border-radius: 15px;
        color: black;
        font-size: 15px;
        padding-left: 20px;
        background-color: ${GRAY_040};
        &::placeholder{
            color: ${GRAY_010};
        }
    `
    return (<TextInputStyle placeholder={placeholder} type={type}></TextInputStyle>)
}