'use client'
import DashBoardPage from "@/components/pages/DashBoardPage";
import useLoginState from "@/components/hooks/useLoginState";

export default function DashBoard({}:any){
    const user = useLoginState();

    return <DashBoardPage></DashBoardPage>
}