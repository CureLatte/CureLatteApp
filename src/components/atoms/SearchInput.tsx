'use client'
import styled from 'styled-components'
import {WHITE_GRAY_1} from "@/constant/color";

const InputStyled = styled.input`
    height: 16px;   
    background-color: ${WHITE_GRAY_1};
    border: none;
`

export default function SearchInput({width, height}: any){
    return (
        <InputStyled style={{width, height}} placeholder={'search for something'}></InputStyled>
    )
}