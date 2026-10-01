import Image from "next/image"
import Link from "next/link"
import { PhoneIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { site } from "@/lib/site"
import switchboard from "@/public/switchboard.jpg"

export function Hero() {
  return (
    <section aria-labelledby="hero-heading">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-2 md:items-center md:gap-12 md:py-16">
        <div className="flex flex-col gap-5 md:gap-6">
          <h1
            id="hero-heading"
            className="text-4xl leading-tight font-extrabold text-balance md:text-5xl"
          >
            Reliable Electricians for Homes &amp; Businesses
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            Keeping you plugged in, from emergency repairs to full rewires.
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="h-12 px-6 text-base font-bold">
              <a href={site.phone.href}>
                <PhoneIcon aria-hidden="true" />
                Call Now
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 border-foreground bg-transparent px-6 text-base font-bold hover:bg-secondary hover:text-secondary-foreground"
            >
              <Link href="/contact">Get a free quote</Link>
            </Button>
          </div>
        </div>

        <Image
          src={switchboard}
          alt="Wired electrical switchboard with circuit breakers"
          placeholder="blur"
          loading="eager"
          sizes="(min-width: 1152px) 552px, (min-width: 768px) 50vw, 100vw"
          className="h-auto w-full rounded-2xl"
        />
      </div>
    </section>
  )
}
