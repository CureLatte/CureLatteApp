'use client'

import styled from "styled-components";

export default function HeadingSemiBold28pxText({children}: any) {
    const TextStyle = styled.text`
        font-size: 28px;
        font-weight: bold;
        
    `

    return <TextStyle>{children}</TextStyle>
}