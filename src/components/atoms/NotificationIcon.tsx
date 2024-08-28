'use client'

import notificationSvg from '../../../public/icons/notification1.svg'
import styled from "styled-components";

const NotificationIconStyle = styled(notificationSvg)`
    width: 25px;
    height: 25px;
`

export default function NotificationIcon(){
    return <NotificationIconStyle></NotificationIconStyle>
}