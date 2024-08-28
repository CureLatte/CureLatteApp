'use client'

import SideBar from "@/components/organisms/SideBar";
import Header from "@/components/organisms/Header";
import styled from "styled-components";
import LogoMain from "@/components/atoms/LogoMain";
import Menu from "@/components/organisms/Menu";
import {GRAY_1, GRAY_2, WHITE_0, WHITE_GRAY_1, WHITE_GRAY_2} from "@/constant/color";


const BaseLayOutStyle = styled.div`
    width: 100vw;
    height: 10vh;
    display: flex;
    flex-direction: row;
    background-color: ${GRAY_2};
`

export default function BaseLayOutTemplate({children}: any){

    return <BaseLayOutStyle>
        <SideBar>
            <LogoMain></LogoMain>
            <Menu></Menu>
        </SideBar>
        <div style={{
            width: 'calc(100% - 250px)',
            height: '100vh',
            backgroundColor: WHITE_GRAY_2
        }}>
            <Header/>
            {children}
        </div>
    </BaseLayOutStyle>
}