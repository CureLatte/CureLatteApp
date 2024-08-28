'use client'

import {ReactNode} from "react";
import LogoMain from "@/components/atoms/LogoMain";
import styled from "styled-components";
import Menu from "@/components/organisms/Menu";
import {WHITE_0, WHITE_GRAY_1} from "@/constant/color";

const SideBarStyle = styled.nav`
    width: 250px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${WHITE_0};
`

export default function SideBar({ children }: any) {

    return (<SideBarStyle>
        {children}
    </SideBarStyle>)

}