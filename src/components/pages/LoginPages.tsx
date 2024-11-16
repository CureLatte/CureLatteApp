'use client'

import CenterModalTemplate from "@/components/templetes/CenterModalTemplate";
import {ThemeContext} from "../context/ThemeContext";
import {useContext, useEffect} from "react";
import styled from "styled-components";
import PrimaryButton from "@/components/atoms/button/PrimaryButton";
import LoginFormat from "@/components/organisms/LoginFormat";
import HomeTemplate from "@/components/templetes/HomeTemplate";

export default function LoginPage({}:any){
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(()=>{
        console.log('theme: ', theme)

    })



    return (
        <HomeTemplate>
            <CenterModalTemplate>
                <LoginFormat></LoginFormat>
            </CenterModalTemplate>
        </HomeTemplate>

    )
}