'use client'

import styled from "styled-components";

export default function BodyRegular16pxText({text}: any) {
    const TextStyle = styled.text`
        font-size: 16px;
        font-weight: normal;
    `

    return <TextStyle>{text}</TextStyle>
}