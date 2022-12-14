import { Moon, Sun } from "phosphor-react"
import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

export const ThemeToggle = () => {

  const {
    activeTheme,
    setActiveTheme
  } = useContext(ThemeContext)

  return (
    <div className="cursor-pointer hover:text-gray-200 hover:scale-105 active:scale-95" title="Trocar tema">
      {
        activeTheme === 'dark'
          ? <Moon onClick={()=>{setActiveTheme('light'); localStorage.theme = 'light'}}  />
          : <Sun onClick={()=>{setActiveTheme('dark'); localStorage.theme = 'dark'}}  />
      }
    </div>
  )
}