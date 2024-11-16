'use client'

import CenterModalTemplate from "@/components/templetes/CenterModalTemplate";
import {ThemeContext} from "../context/ThemeContext";
import {useContext, useEffect} from "react";
import styled from "styled-components";
import PrimaryButton from "@/components/atoms/button/PrimaryButton";
import LoginFormat from "@/components/organisms/LoginFormat";

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
            <CenterModalTemplate>
                <LoginFormat></LoginFormat>
            </CenterModalTemplate>
        </HomeTemplateStyle>

    )
}