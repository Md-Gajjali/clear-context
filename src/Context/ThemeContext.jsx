import React, { createContext, useState } from 'react'
export const ThemeProvider = createContext()
const ThemeContext = ({children}) => {
    const [theme,setTheme]=useState("light")

    const toggle = () => {
        setTheme(
            theme === "light" ? "dark" : "light"
        )

        let html = document.querySelector("html")

        if (theme === "light") {
            html.classList.add("dark")
        } else {
            html.classList.remove("dark")
            
        }
    }
  return (
    <div>
      
    </div>
  )
}

export default ThemeContext
