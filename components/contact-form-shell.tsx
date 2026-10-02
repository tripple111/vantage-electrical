"use client"

import { useState } from "react"
import { CircleCheckIcon } from "lucide-react"

// The only client-side part of the contact form: stops the page reload and
// swaps the form for a thank-you message. Nothing is sent or stored.
export function ContactFormShell({ children }: { children: React.ReactNode }) {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div
        role="status"
        className="flex items-center gap-3 text-xl font-bold"
      >
        <CircleCheckIcon className="size-7 shrink-0" aria-hidden="true" />
        Thanks, we&apos;ll be in touch shortly.
      </div>
    )
  }

  return (
    <form
      aria-label="Contact form"
      className="flex flex-col gap-6"
      onSubmit={(event) => {
        event.preventDefault()
        setSubmitted(true)
      }}
    >
      {children}
    </form>
  )
}
