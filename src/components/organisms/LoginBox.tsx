'use client'

import LogoMain from "@/components/atoms/LogoMain";
import InputBox from "@/components/moecules/InputBox";
import styled from "styled-components";
import {GRAY_1, GRAY_2, WHITE_GRAY_1} from "@/constant/color";
import ToggleSwitchBox from "@/components/moecules/ToggleSwitchBox";
import PrimaryButton from "@/components/atoms/button/PrimaryButton";
import GrayButton from "@/components/atoms/button/GrayButton";
import {useContext} from "react";
import {UserContext} from "@/components/context/UserContext";

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


    const {user, setUser} = useContext(UserContext);

    console.log('user =====>', user)

    return (
        <LoginBoxStyle>
            <LogoMain></LogoMain>
            <InputBox width={'418px'} title={'ID'} placeholder={'Email Address'}></InputBox>
            <InputBox width={'418px'} title={'Password'} placeholder={'Password'}></InputBox>
            <div style={{display: 'flex', justifyContent:'start', width: '418px'}}>
                <ToggleSwitchBox title={'remember info'}></ToggleSwitchBox>
            </div>
            <div style={{display: 'flex', justifyContent:'space-between', width: '418px', marginTop: '10px'}}>
                <GrayButton title={'Sign up'} onClick={()=>{}}></GrayButton>
                <PrimaryButton title={'Login in'} onClick={()=>{
                    setUser({id:'1'})
                    console.log('user =====>', user)
                }}></PrimaryButton>
            </div>


        </LoginBoxStyle>
    )
}