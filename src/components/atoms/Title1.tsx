import styled from "styled-components";

const Title1Style = styled.span`
    font-size: 28px;
    
    
`


export default function Title1({ style, children}:any){
    return <Title1Style style={style}>{children}</Title1Style>
}

