'use client'

import styled from "styled-components";
import {WHITE_0} from "@/constant/color";

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