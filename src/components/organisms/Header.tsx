'use client'

import styled from "styled-components";
import ProfileHeader from "../moecules/ProfileHeader";
import SearchBar from "../moecules/SearchBar";
import {WHITE_0} from "@/constant/color";
import SettingHeader from "@/components/moecules/SettingHeader";
import NotificationHeader from "@/components/moecules/NotificationHeader";
import HeaderTitle from "@/components/moecules/HeaderTitle";

const HeaderStyle = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100px;
    background-color: ${WHITE_0};
    justify-content: center;
    align-items: center;
    gap: 20px;
`



export default function Header({title, user}: any){

    return (
        <HeaderStyle>
            <HeaderTitle>{title? title: 'Title is none'}</HeaderTitle>
            <SearchBar></SearchBar>
            <SettingHeader></SettingHeader>
            <NotificationHeader></NotificationHeader>
            <ProfileHeader nickName={'김재성'} imageUrl={''}></ProfileHeader>
        </HeaderStyle>
    )
}
