'use client'

import BodyRegular16pxText from "@/components/atoms/text/BodyRegular16pxText";
import ToggleSwitch from "../atoms/ToggleSwitch";
import styled from "styled-components";
import {GRAY_010} from "@/constant/color";

export default function ToggleSwitchBox({id, title}: any){

    const ToggleSwitchBoxStyle = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        color: ${GRAY_010};
    `

    return (<ToggleSwitchBoxStyle>
        <ToggleSwitch></ToggleSwitch>
        <BodyRegular16pxText text={title}></BodyRegular16pxText>
    </ToggleSwitchBoxStyle>)
}