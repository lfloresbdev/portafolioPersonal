import { useState, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

export function TerminalLogo({
  className,
  lines = ["LEONARDO FLORES", "DEVELOPER"],
  speed = 100,
}) {
  const [displayedCount, setDisplayedCount] = useState(0)
  const intervalRef = useRef(null)

  const maxLen = Math.max(...lines.map(l => l.length))
  const offsets = lines.map(line => maxLen - line.length)

  useEffect(() => {
    if (displayedCount >= maxLen) return

    intervalRef.current = setInterval(() => {
      setDisplayedCount(prev => {
        if (prev >= maxLen) {
          clearInterval(intervalRef.current)
          return prev
        }
        return prev + 1
      })
    }, speed)

    return () => clearInterval(intervalRef.current)
  }, [maxLen, speed, displayedCount])

  const getVisible = (line, index) => {
    const visible = Math.max(0, Math.min(displayedCount - offsets[index], line.length))
    return line.slice(0, visible)
  }

  return (
    <div
      className={cn(
        "font-mono bg-background",
        "px-3 sm:px-5 py-1.5 sm:py-3",
        "text-base sm:text-xl md:text-3xl lg:text-4xl",
        "inline-flex flex-col items-center whitespace-nowrap",
        "w-full sm:w-auto",
        className
      )}
      aria-label={lines.join(" ")}
    >
      <div>
          <span aria-hidden="true" className="tracking-wide text-foreground">
            {getVisible(lines[0], 0)}
          </span>
          <span
            aria-hidden="true"
            className="text-blue-500 ml-0.5 animate-blink"
          >
            █
          </span>
        </div>
      <div className="text-blue-500 text-[0.6em] tracking-[0.3em]">
        <span aria-hidden="true">
          {getVisible(lines[1], 1)}
        </span>
      </div>
    </div>
  )
}
