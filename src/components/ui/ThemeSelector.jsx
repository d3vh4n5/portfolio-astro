import { useState, useEffect } from 'preact/hooks'

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
                class="border"
            >
                Darkmode
            </button>
        </>
    )
}