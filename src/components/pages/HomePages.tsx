'use client'
import HomeTemplate from "@/components/templetes/HomeTemplates";
import {useEffect, useState} from "react";

export default function HomePages({children}: any) {

    const [user, setUser] = useState(false)

    useEffect(()=>{
        if(user){
            if(typeof window !== "undefined"){
                window.location.href='/dashboard'
            }

        }
    }, [])

    return <HomeTemplate>

    </HomeTemplate>
}