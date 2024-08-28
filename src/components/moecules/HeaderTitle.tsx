'use client'

import Title1 from "@/components/atoms/Title1";
import styled from "styled-components";


const HeaderStyle = styled.div`
    width: 40vw;
`

export default function HeaderTitle({children}: any) {

    return <HeaderStyle>
        <Title1 style={{}}>
            {children}
        </Title1>
    </HeaderStyle>
}