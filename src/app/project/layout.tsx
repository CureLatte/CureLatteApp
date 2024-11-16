'use client'
import ProjectDashBoardTemplate from "@/components/templetes/ProjectDashBoardTemplate";
import {useEffect} from "react";



export default function LayOut({children}: any){


    return (
        <ProjectDashBoardTemplate>
            {children}
        </ProjectDashBoardTemplate>
    )
}