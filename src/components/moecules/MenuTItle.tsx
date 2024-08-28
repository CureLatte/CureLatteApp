'use client'

import styled from "styled-components";
import {GRAY_1, PRIMARY_3} from "@/constant/color";

const MenuTitleStyle=styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 200px;
    font-size: 18px;
    color: ${GRAY_1};
    margin-top: 10px;
    margin-bottom: 10px;
    
    &:hover{
        color: ${PRIMARY_3}   
        background-color: ${GRAY_1};
    }
`
export default function MenuTitle({children, }:any){
    return <MenuTitleStyle>
        {children}
    </MenuTitleStyle>
}