'use client'
import {createContext, useState} from "react";

export const UserContext = createContext({
    user: null,
    setUser: (value: any)=>{

    }
})

export default function UserProvider({ children }:any){
    const [user, setUser] = useState(null)

    return <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
}