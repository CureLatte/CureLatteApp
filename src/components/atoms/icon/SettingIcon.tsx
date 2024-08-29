'use client'

import SettingSvg from '../../../../public/icons/setting.svg'
import styled from "styled-components";

const SettingIconStyle = styled(SettingSvg)`
        width: 25px;
        height: 25px;
    `


export default function SettingIcon(){
    return(
         <SettingIconStyle></SettingIconStyle>
    )
}