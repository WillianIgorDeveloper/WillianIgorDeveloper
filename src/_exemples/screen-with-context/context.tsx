import { ProviderError } from "@/shared/errors/provider"
import { createContext, useContext } from "react"

namespace ScreenExempleContextType {}

type ScreenExempleContextType = {}

export const ScreenExempleContext = createContext<ScreenExempleContextType | undefined>(
  undefined
)

export function ScreenExempleProvider({ children }: { children: React.ReactNode }) {
  return <ScreenExempleContext.Provider value={{}}>{children}</ScreenExempleContext.Provider>
}

export function useScreenExemple() {
  const context = useContext(ScreenExempleContext)
  if (!context) throw new ProviderError({ provider: "ScreenExemple" })
  return context
}
