"use client"

import { useEffect, useState } from "react"

export function TypingText({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    const done = !deleting && text === word
    const cleared = deleting && text === ""

    const timeout = setTimeout(
      () => {
        if (done) setDeleting(true)
        else if (cleared) {
          setDeleting(false)
          setIndex((i) => i + 1)
        } else setText(word.slice(0, text.length + (deleting ? -1 : 1)))
      },
      done ? 1800 : cleared ? 300 : deleting ? 35 : 70,
    )
    return () => clearTimeout(timeout)
  }, [text, deleting, index, words])

  return (
    <span>
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden="true" className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        {text}
      </span>
      <span aria-hidden="true" className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.15em] animate-pulse bg-accent" />
    </span>
  )
}
