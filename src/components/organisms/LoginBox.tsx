'use client'

import LogoMain from "@/components/atoms/LogoMain";
import InputBox from "@/components/moecules/InputBox";
import styled from "styled-components";
import {GRAY_1, GRAY_2, WHITE_GRAY_1} from "@/constant/color";
import ToggleSwitchBox from "@/components/moecules/ToggleSwitchBox";

export default function LoginBox({}: any) {
    const LoginBoxStyle = styled.div`
        width: 500px;
        height: 500px;
        background-color: ${WHITE_GRAY_1};
        border-radius: 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `;

    return (
        <LoginBoxStyle>
            <LogoMain></LogoMain>
            <InputBox width={'418px'} title={'ID'} placeholder={'Email Address'}></InputBox>
            <InputBox width={'418px'} title={'Password'} placeholder={'Password'}></InputBox>
            <div style={{display: 'flex', justifyContent:'start', width: '418px'}}>
                <ToggleSwitchBox title={'remember info'}></ToggleSwitchBox>
            </div>

        </LoginBoxStyle>
    )
}