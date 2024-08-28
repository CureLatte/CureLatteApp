import DashBoard from "@/app/dashbord/page";

export default function Layout({children}:{children:any}){
    return (
        <DashBoard>
            {children}
        </DashBoard>
    )
}