import { useState, useEffect } from 'preact/hooks'
import MoonIcon from "../icons/MoonIcon.astro?raw";
import SunIcon from "../icons/SunIcon.astro?raw";

export default function ThemeSelector(){

    const [theme, setTheme] = useState(()=>{
        if(window.matchMedia("(prefers-color-scheme: dark)").matches){
            return "dark"
        }
        return "light";
    })

    useEffect(()=>{
        if(theme =="dark"){
            document.querySelector('html').classList.add('dark')
        }else {
            document.querySelector('html').classList.remove('dark')
        }

    }, [theme])

    function handleThemeChange(){
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }


    return(
        <>
            <button 
                onClick={handleThemeChange}
                class=""
            >
                <span dangerouslySetInnerHTML={{ __html: theme === 'light' ? SunIcon : MoonIcon }} />
            </button>
        </>
    )
}