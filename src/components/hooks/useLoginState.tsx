'use client'

import {useContext} from "react";
import {UserContext} from "@/components/context/UserContext";

export default function useLoginState() {

    const {user, setUser} = useContext(UserContext)

    if(typeof window === 'undefined'){
        return null
    }

    if(!user){
        window.location.href='/'
        return null
    }

    // login 성공
    console.log('login success =====>', )
    sessionStorage.setItem('user', user)

    return user
}