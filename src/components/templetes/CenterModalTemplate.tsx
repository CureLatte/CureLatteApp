'use client'

import LogoMain from "@/components/atoms/LogoMain";
import InputBox from "@/components/moecules/InputBox";
import styled from "styled-components";
import {GRAY_050, GRAY_060, GRAY_085, GRAY_1, GRAY_2, WHITE_GRAY_1} from "@/constant/color";
import ToggleSwitchBox from "@/components/moecules/ToggleSwitchBox";
import PrimaryButton from "@/components/atoms/button/PrimaryButton";
import GrayButton from "@/components/atoms/button/GrayButton";
import {useContext} from "react";
import {UserContext} from "@/components/context/UserContext";

export default function CenterModalTemplate({children}: any) {
    const CenterModalStyle = styled.div`
        width: 500px;
        padding: 40px;
        background-color: ${GRAY_060};
        border-radius: 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `;

    return (
        <CenterModalStyle>
            <LogoMain></LogoMain>
            <div style={{marginTop: "40px"}}>
                {children}
            </div>
        </CenterModalStyle>
    )
}