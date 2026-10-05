import { useGetMockedValuesSuspense } from "@/requests/-get-mock-values-tanstack-suspense"
import { ErrorBoundary } from "react-error-boundary"
import { Suspense } from "react"
import { SuspenseComponentLoading } from "./loading"
import { SuspenseComponentError } from "./error"

export function SuspenseComponent() {
  return (
    <Suspense fallback={<SuspenseComponentLoading />}>
      <ErrorBoundary fallbackRender={() => <SuspenseComponentError />}>
        <SuspenseComponentContent />
      </ErrorBoundary>
    </Suspense>
  )
}

export function SuspenseComponentContent() {
  const { data } = useGetMockedValuesSuspense()
  return (
    <div>
      <h1>Suspense Component</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  )
}
