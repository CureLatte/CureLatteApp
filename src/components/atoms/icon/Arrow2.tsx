import {rotate} from "next/dist/server/lib/squoosh/impl";
import styled from "styled-components";

export default function Arrow2Icon({height, width, direction, style}: any){

    const ArrowIconStyle = styled.img`
        width: 100%;
        height: 100%;
    `

    return <ArrowIconStyle style={style} src={"/icons/arrow2.png"} width={width} height={height} alt={""}></ArrowIconStyle>
}