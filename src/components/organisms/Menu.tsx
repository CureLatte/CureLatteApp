'use client'
import Title1 from "@/components/atoms/Title1";
import MenuTitle from "@/components/moecules/MenuTItle";
import {HomeIcon} from "@/components/atoms/HomeIcon";
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