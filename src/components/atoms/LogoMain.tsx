'use client'
import styled from 'styled-components'
import LogoSvg from '../../../public/icons/next.svg'


export const LogoMainStyle = styled(LogoSvg)`
    width: 150px;
    height: 100px;
`
export default function LogoMain(){
    return(
        <LogoMainStyle></LogoMainStyle>
    )
}