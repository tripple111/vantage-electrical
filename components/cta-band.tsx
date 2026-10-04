import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export function CtaBand() {
  return (
    <section aria-labelledby="cta-heading">
      <div className="mx-auto max-w-6xl px-4 pb-12 md:pb-16">
        <div className="flex flex-col items-center gap-6 rounded-2xl bg-secondary px-6 py-10 text-center text-secondary-foreground md:gap-8 md:px-12 md:py-14">
          <h2
            id="cta-heading"
            className="text-2xl font-extrabold text-balance break-words md:text-4xl"
          >
            Need an electrician? Get a free estimate
          </h2>
          <Button
            asChild
            className="h-12 w-full px-8 text-base font-bold focus-visible:border-secondary-foreground focus-visible:ring-secondary-foreground/60 md:w-auto"
          >
            <Link href="/contact">
              Get a free estimate
              <ArrowRightIcon aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
