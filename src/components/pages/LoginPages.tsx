'use client'

import LoginBox from "@/components/organisms/LoginBox";
import {ThemeContext} from "../context/ThemeContext";
import {useContext, useEffect} from "react";
import styled from "styled-components";

export default function LoginPage({}:any){
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(()=>{
        console.log('theme: ', theme)

    })


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
            <LoginBox></LoginBox>
        </HomeTemplateStyle>

    )
}