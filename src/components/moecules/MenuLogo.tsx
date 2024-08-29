'use client'

import LogoMain from "@/components/atoms/LogoMain";
import Link from "next/link";
import styled from "styled-components";

const MenuLogoStyle = styled.div`
    width: 100%;
    height: 100px;
`

export default function MenuLogo() {
    return (<Link href={'/'}>
        <MenuLogoStyle>
            <LogoMain/>
        </MenuLogoStyle>
    </Link>)


}