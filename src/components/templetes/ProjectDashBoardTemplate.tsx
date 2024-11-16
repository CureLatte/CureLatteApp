'use client'
import styled from "styled-components";

export default function ProjectDashBoardTemplate({children}: any){


    const ProjectDashBoardStyle = styled.div`
        background-color: #F5F7FA;
        // max-width: 100vw;
        // min-height: 100vh;
        
    `



    return (
        <ProjectDashBoardStyle>
            {children}
        </ProjectDashBoardStyle>
    )

}