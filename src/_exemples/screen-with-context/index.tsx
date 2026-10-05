import { ScreenExempleProvider } from "./context"

export function ScreenExemple() {
  return (
    <ScreenExempleProvider>
      <ScreenExempleContent />
    </ScreenExempleProvider>
  )
}

export function ScreenExempleContent() {
  return (
    <div>
      <h1>ScreenExemple</h1>
    </div>
  )
}
