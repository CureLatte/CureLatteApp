'use client'

import ProfileCircle from "@/components/atoms/ProfileCircle";
import styled from "styled-components";
import {WHITE_GRAY_1} from "@/constant/color";

const ProfileHeaderStyle = styled.div`
    width: 50px;
    height: 50px;
    background-color: ${WHITE_GRAY_1};
    border-radius: 25px;
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;
`


export default function ProfileHeader ({imageUrl, }:any){
    return <ProfileHeaderStyle>
      <ProfileCircle imageUrl={imageUrl} size={'25px'}></ProfileCircle>
    </ProfileHeaderStyle>
}