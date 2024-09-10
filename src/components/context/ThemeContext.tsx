'use client'


import {createContext, useState} from "react";

export const ThemeContext = createContext({
    theme: 'dark',
    setTheme: (value: any)=>{}
})

export default function ThemeProvider({ children }:any) {
    const [theme, setTheme] = useState('dark')


    return (<ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>)
}