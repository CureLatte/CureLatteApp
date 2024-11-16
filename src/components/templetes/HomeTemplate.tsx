'use client'

import CenterModalTemplate from "@/components/templetes/CenterModalTemplate";
import styled from "styled-components";
import {GRAY_070, GRAY_080, GRAY_085, GRAY_090} from "@/constant/color";

export default function HomeTemplate({children}: any){

    const HomeTemplateStyle = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100vw;
        min-height: 100vh;
        background-color: ${GRAY_080};
    `

    return (
        <HomeTemplateStyle>
                {children}
        </HomeTemplateStyle>
    )
}