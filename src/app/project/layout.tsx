import ProjectDashBoardTemplate from "@/components/templetes/ProjectDashBoardTemplate";



export default function LayOut({children}: any){
    return (

        <ProjectDashBoardTemplate>
            {children}
        </ProjectDashBoardTemplate>
    )
}