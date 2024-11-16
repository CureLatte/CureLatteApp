'use client'
import DashBoardPages from "@/components/pages/DashBoardPages";
import useLoginState from "@/components/hooks/useLoginState";

export default function DashBoard({}:any){
    const user = useLoginState();

    return <DashBoardPages></DashBoardPages>
}