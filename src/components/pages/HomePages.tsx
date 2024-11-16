'use client'
import HomeTemplates from "@/components/templetes/HomeTemplate";
import {useEffect, useState} from "react";

export default function HomePages({children}: any) {

    const [user, setUser] = useState(false)

    useEffect(()=>{
        if(user){
            if(typeof window !== "undefined"){
                // window.location.href='/dashboard'
            }

        }
    }, [])

    return <HomeTemplates>
    </HomeTemplates>
}