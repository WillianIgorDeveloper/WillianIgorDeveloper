import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Outlet } from "react-router"
import { TooltipProvider } from "@/components/particles/tooltip"
import { ThemeProvider } from "@/contexts/theme"

const queryClient = new QueryClient()

export function GlobalProvider() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Outlet />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
