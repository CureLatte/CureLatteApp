'use client'
import styled from "styled-components";
import Arrow1Icon from "@/components/atoms/icon/Arrow1";
import Arrow2Icon from "@/components/atoms/icon/Arrow2";

export default function SliderArrow({flipYn, onClick, style}: any){

    const SliderArrow = styled.div`
        position: relative;
        background-color: rgba(0,0,0,0.5);
        width: 70px;
        height: 70px;
        opacity: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    `



   return (
       <SliderArrow style={style} onClick={onClick}>
           <Arrow2Icon style={{
               width: "40px",
               height: "40px",
               opacity: "100%",
               filter: "invert(96%) sepia(39%) saturate(15%) hue-rotate(84deg) brightness(108%) contrast(100%)"
           }}/>
       </SliderArrow>

   )
}