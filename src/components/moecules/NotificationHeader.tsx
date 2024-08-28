'use client'

import NotificationIcon from "@/components/atoms/NotificationIcon";
import styled from "styled-components";
import {WHITE_GRAY_1} from "@/constant/color";

const NotificationHeaderStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: ${WHITE_GRAY_1};
    border-radius: 25px;
`


export default function NotificationHeader() {

    return <NotificationHeaderStyle>
        <NotificationIcon></NotificationIcon>
    </NotificationHeaderStyle>
}