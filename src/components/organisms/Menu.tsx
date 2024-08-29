'use client'
import MenuTitle from "@/components/moecules/MenuTItle";
import {HomeIcon} from "@/components/atoms/icon/HomeIcon";
import styled from "styled-components";

const MenuStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export default function Menu({}:any){
    return <MenuStyle>
        <MenuTitle>
            <HomeIcon/>
            <span>Dashboard</span>
        </MenuTitle>

        <MenuTitle>
            <HomeIcon/>
            <span>Dashboard</span>
        </MenuTitle>

    </MenuStyle>
}