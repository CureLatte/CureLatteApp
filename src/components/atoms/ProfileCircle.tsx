'use client'

import styled from "styled-components";

const ProfileCircleStyle = styled.img`
`
export default function ProfileCircle({imageUrl, size}:any){
    return <ProfileCircleStyle src={imageUrl? imageUrl: '/images/noPhoto.png'} width={size?size:'50px'} height={size?size: '50px'}></ProfileCircleStyle>
}