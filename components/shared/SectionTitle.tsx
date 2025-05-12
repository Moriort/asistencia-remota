interface SectionTitleProps {
  badge: string
  title: string
  description?: string
  align?: "left" | "center"
  textColor?: string
  badgeColor?: string
  maxWidth?: string
}

export default function SectionTitle({
  badge,
  title,
  description,
  align = "center",
  textColor = "text-dark",
  badgeColor = "bg-primary/10 text-primary",
  maxWidth = "max-w-3xl",
}: SectionTitleProps) {
  return (
    <div className={`${align === "center" ? "text-center" : "text-left"} mb-10 md:mb-16`}>
      <div className="inline-block mb-3 md:mb-4 relative">
        <span className={`inline-block ${badgeColor} px-3 py-1 rounded-md text-sm font-medium`}>
          {badge}
        </span>
        <div className="absolute -bottom-1 -right-1 w-full h-full border border-primary/30 rounded-md"></div>
      </div>
      <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight ${textColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-3 md:mt-4 text-base md:text-lg lg:text-xl ${textColor === "text-dark" ? "text-dark/70" : "text-white/80"} ${align === "center" ? `${maxWidth} mx-auto` : maxWidth}`}>
          {description}
        </p>
      )}
    </div>
  )
} 