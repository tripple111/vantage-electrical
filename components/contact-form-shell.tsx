"use client"

import { createContext, startTransition, useActionState, useContext } from "react"
import { CircleCheckIcon } from "lucide-react"

import { sendEnquiry, type EnquiryState } from "@/app/contact/actions"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/site"

const PendingContext = createContext(false)

// The client-side part of the contact form: submits to the sendEnquiry
// Server Action and shows the sending, success and error states.
export function ContactFormShell({ children }: { children: React.ReactNode }) {
  const [state, formAction, pending] = useActionState<EnquiryState, FormData>(
    sendEnquiry,
    { status: "idle" }
  )

  if (state.status === "success") {
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
        // Submitting via onSubmit (not the action prop) keeps the fields
        // filled in if sending fails, so the visitor can try again.
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        startTransition(() => formAction(formData))
      }}
    >
      <PendingContext value={pending}>{children}</PendingContext>
      {state.status === "error" && !pending && (
        <p role="alert" className="font-semibold">
          Something went wrong. Please call us on {site.phone.display}.
        </p>
      )}
    </form>
  )
}

export function SubmitButton({ className }: { className?: string }) {
  const pending = useContext(PendingContext)
  return (
    <Button type="submit" disabled={pending} className={className}>
      {pending ? "Sending…" : "Send request"}
    </Button>
  )
}
