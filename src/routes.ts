import { createBrowserRouter } from "react-router"
// Contexts
import { GlobalProvider } from "@/contexts/_global"
// Screens
import { NotFoundScreen } from "@/screens/not-found"
import { ErrorScreen } from "@/screens/error"
import { LandingScreen } from "@/screens/landing"

export const ROUTES = new Map([
  ["*", { needsAuth: false, onlyPublic: false }],
  ["/", { needsAuth: false, onlyPublic: false }]
])

export const PATHS = {
  NOT_FOUND: "*",
  LANDING: "/"
}

export const router = createBrowserRouter([
  {
    Component: GlobalProvider,
    ErrorBoundary: ErrorScreen,
    children: [
      {
        path: PATHS.NOT_FOUND,
        Component: NotFoundScreen
      },
      {
        path: PATHS.LANDING,
        Component: LandingScreen
      }
    ]
  }
])
