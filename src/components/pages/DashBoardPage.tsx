'use client'

import useLoginState from "@/components/hooks/useLoginState";

export default function DashBoardPage() {
    const user = useLoginState()

    return <>
        THIS IS DashBoard
    </>
}