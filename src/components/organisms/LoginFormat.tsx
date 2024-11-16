'use client'
import InputBox from "@/components/moecules/InputBox";
import ToggleSwitchBox from "@/components/moecules/ToggleSwitchBox";
import GrayButton from "@/components/atoms/button/GrayButton";
import PrimaryButton from "@/components/atoms/button/PrimaryButton";
import React, {useContext} from "react";
import {UserContext} from "@/components/context/UserContext";

export default function LoginFormat(){

    // const {user, setUser} = useContext(UserContext);



    return (
        <>
            <InputBox width={'418px'} title={'ID'} placeholder={'Email Address'} type={'email'}></InputBox>
            <InputBox width={'418px'} title={'Password'} placeholder={'Password'} type={'password'}></InputBox>
            <div style={{display: 'flex', justifyContent: 'start', width: '418px'}}>
                <ToggleSwitchBox title={'remember info'}></ToggleSwitchBox>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', width: '418px', marginTop: '10px'}}>
                <GrayButton title={'Sign up'} onClick={() => {
                    window.alert("기능 준비중 입니다")
                }}></GrayButton>
                <PrimaryButton title={'Login in'} onClick={() => {
                    // setUser({id: '1'})
                    window.alert("기능 준비중 입니다")
                }}></PrimaryButton>
            </div>
        </>
    )
}