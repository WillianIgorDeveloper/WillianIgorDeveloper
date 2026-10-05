import { ProviderError } from "@/shared/errors/provider"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark"

type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}

const STORAGE_KEY = "theme"

// The initial class is set by the inline script in index.html to avoid a flash
function getInitialTheme(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light"
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {}
  }, [theme])

  function toggleTheme() {
    setTheme((current) => (current === "dark" ? "light" : "dark"))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new ProviderError({ provider: "Theme" })
  return context
}
