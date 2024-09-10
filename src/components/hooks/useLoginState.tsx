'use client'

import {useContext} from "react";
import {UserContext} from "@/components/context/UserContext";

export default function useLoginState() {

    const {user, setUser} = useContext(UserContext)

    if(!user){
        return window.location.href='/'
    }

    // login 성공
    console.log('login success =====>', )
    sessionStorage.setItem('user', user)

    return user
}