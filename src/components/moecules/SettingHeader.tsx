'use client'


import SettingIcon from "@/components/atoms/SettingIcon";
import styled from "styled-components";
import {GRAY_1, WHITE_GRAY_1} from "@/constant/color";

const SettingHeaderStyle = styled.div`
    width: 50px;
    height: 50px;
    background-color: ${WHITE_GRAY_1};
    border-radius: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export default function SettingHeader() {
    return <SettingHeaderStyle>
        <SettingIcon/>
    </SettingHeaderStyle>
}