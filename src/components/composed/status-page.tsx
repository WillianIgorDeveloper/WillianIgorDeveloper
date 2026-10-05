import { ArrowLeftIcon } from "lucide-react"
import { cn } from "cn"
import { buttonVariants } from "@/components/particles/button"

type StatusPageProps = {
  code: string
  title: string
  description: string
  back: string
}

export function StatusPage({ code, title, description, back }: StatusPageProps) {
  return (
    <main className="relative flex min-h-svh items-center justify-center overflow-hidden px-4">
      <div className="bg-grid pointer-events-none absolute inset-0 mask-[radial-gradient(ellipse_at_center,black_10%,transparent_65%)] opacity-60" />
      <div className="relative text-center">
        <p className="font-heading text-brand text-7xl font-semibold tracking-tighter sm:text-8xl">
          {code}
        </p>
        <h1 className="font-heading mt-4 text-xl font-medium">{title}</h1>
        <p className="text-muted-foreground mt-2">{description}</p>
        <a
          href="/"
          className={cn(buttonVariants({ variant: "outline" }), "mt-8 h-10 px-4 text-sm")}
        >
          <ArrowLeftIcon />
          {back}
        </a>
      </div>
    </main>
  )
}
