type SectionHeadingProps = {
  index: string
  title: string
}

export function SectionHeading({ index, title }: SectionHeadingProps) {
  return (
    <div className="font-heading mb-10 flex items-center gap-3 text-sm">
      <span className="text-brand">{index}</span>
      <h2 className="font-medium tracking-tight">{title}</h2>
      <span className="bg-border h-px flex-1" />
    </div>
  )
}
