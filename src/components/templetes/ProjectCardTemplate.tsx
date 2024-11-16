'use client'
import styled from "styled-components";

export default function ProjectCardTemplate({children}:any){

    const ProjectCareTemplateStyle = styled.div`
        width: 300px;
        height: 300px;
        background-color: aqua;
        border-radius: 10px;
        flex: 0 0 auto;
    `



    return (
        <ProjectCareTemplateStyle>
            {children}
        </ProjectCareTemplateStyle>
    )
}