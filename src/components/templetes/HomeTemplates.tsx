'use client'

import LoginBox from "@/components/organisms/LoginBox";
import styled from "styled-components";

export default function HomeTemplate(){

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
             <LoginBox>

            </LoginBox>
        </HomeTemplateStyle>

    )
}