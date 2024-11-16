'use client'

import CenterModalTemplate from "@/components/templetes/CenterModalTemplate";
import styled from "styled-components";

export default function HomeTemplate({children}: any){

    const HomeTemplateStyle = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
    `

    return (
        <HomeTemplateStyle>
                {children}
        </HomeTemplateStyle>
    )
}