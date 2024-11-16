'use client'
import ProjectCardTemplate from "@/components/templetes/ProjectCardTemplate";
import {useEffect, useState} from "react";
import SliderArrow from "@/components/organisms/SliderArrow";
import RowSlider from "@/components/templetes/RowSlider";

export default function ProjectDashBoardPages(){
    const [projectList, setProjectList] = useState<Element[]>([])

    useEffect(() => {
        getProjectList(10)
    }, []);

    const getProjectList = (projectCnt: number) => {

        const tempProjectList: any = [];

        for(let i=0; i< projectCnt; i++){

            tempProjectList.push(
                (<ProjectCardTemplate>{i}</ProjectCardTemplate>)
            )

        }

        setProjectList(tempProjectList);

    }


    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
            width: "100vw",
            height: "100vh",
            padding: "50px",
        }}>
            <RowSlider contentList={projectList} />
        </div>


    )
}