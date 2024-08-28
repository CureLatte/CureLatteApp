'use client'

import {SearchIcon} from "@/components/atoms/SearchIcon";
import SearchInput from "@/components/atoms/SearchInput";
import styled from "styled-components";
import {WHITE_GRAY_1} from "@/constant/color";

const SearchBarStyle = styled.div`
    width: ${(props:any)=> props.widthSize? props.widthSize: "100%"};
    max-width: 200px;
    height: 50px;
    border-radius: 25px;
    background-color: ${WHITE_GRAY_1};
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: space-evenly;
    
`
export default function SearchBar({widthSize}:any){
    return (
        <SearchBarStyle style={{height: '50px'}}>
            <SearchIcon style={{position: ''}}></SearchIcon>
            <SearchInput width={widthSize}></SearchInput>
        </SearchBarStyle>
    )
}
