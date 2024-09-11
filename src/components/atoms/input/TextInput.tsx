'use client'

import styled from "styled-components";
import {GRAY_1, GRAY_2, PRIMARY_2} from "@/constant/color";


export default function TextInput ({width, placeholder, type} : any) {

    const TextInputStyle = styled.input`
        width: calc(${width? width : "100%"} - 20px);
        border: solid #DFEAF2 1px;
        height: 50px;
        border-radius: 15px;
        color: black;
        font-size: 15px;
        padding-left: 20px;
        &::placeholder{
            color: ${PRIMARY_2};
        }
    `
    return (<TextInputStyle placeholder={placeholder} type={type}></TextInputStyle>)
}