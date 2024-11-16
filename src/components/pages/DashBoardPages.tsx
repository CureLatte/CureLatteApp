'use client'

import useLoginState from "@/components/hooks/useLoginState";

export default function DashBoardPages() {
    const user = useLoginState()


    return <>
        THIS IS DashBoard
    </>
}