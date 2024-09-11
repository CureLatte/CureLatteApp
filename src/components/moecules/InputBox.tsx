'use client'

import styled from "styled-components";
import TextInput from "@/components/atoms/input/TextInput";
import HeadingSemiBold28pxText from "@/components/atoms/text/HeadingSemiBold28pxText";
import BodyRegular16pxText from "@/components/atoms/text/BodyRegular16pxText";

export default function InputBox({style, title, width, placeholder, type}: any){

    const InputBoxStyle = styled.div`
        display: flex;
        flex-direction: column;
        width: ${width? width: '100%'};
        align-items: start;
        justify-content: center;
        gap: 10px;
        margin:10px;
    `

    return (
        <InputBoxStyle style={style}>
            <BodyRegular16pxText text={title}></BodyRegular16pxText>
            <TextInput width={width} placeholder={placeholder} type={type}></TextInput>
        </InputBoxStyle>
    )
}