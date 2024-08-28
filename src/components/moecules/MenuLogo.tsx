'use client'

import LogoMain from "@/components/atoms/LogoMain";
import styled from "styled-components";

const MenuLogoStyle = styled.div`
    width: 100%;
    height: 200px;
    background-color: blue;
`

export default function MenuLogo() {
    return <MenuLogoStyle>
        <LogoMain/>
    </MenuLogoStyle>

}