'use client'
import styled from 'styled-components'
import LogoSvg from '../../../public/images/logo.png'


export const LogoMainStyle = styled.div`
    width: 200px;
    height: 150px;
    background-image: url('/images/logo.png');
    background-position: center;
    background-size: 150%;
`
export default function LogoMain(){
    return(
        <LogoMainStyle></LogoMainStyle>
    )
}