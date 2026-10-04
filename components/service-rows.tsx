import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import commercial from "@/public/commercial.jpg"
import emergency from "@/public/emergency.jpg"
import residential from "@/public/residential.jpg"

const services = [
  {
    id: "emergency-repairs",
    title: "Emergency repairs",
    description:
      "For homeowners, landlords and businesses who need help fast when something goes wrong. We deal with power outages, tripped breakers, burning smells, exposed wiring and storm damage, day or night.",
    image: emergency,
    alt: "Electrician in work gloves testing a home electrical panel with a multimeter",
  },
  {
    id: "residential-electrical",
    title: "Residential electrical",
    description:
      "For homeowners and landlords planning upgrades or keeping a property safe. Typical jobs include full and partial rewiring, electrical panel upgrades, new outlets and lighting, EV charger installs and electrical safety inspections.",
    image: residential,
    alt: "Electrician on a stepladder installing a pendant light in a modern kitchen",
  },
  {
    id: "commercial-electrical",
    title: "Commercial electrical",
    description:
      "For stores, offices, restaurants and other businesses that rely on dependable power. We install and maintain commercial lighting, three-phase power and emergency lighting, and schedule work around your business hours.",
    image: commercial,
    alt: "Electrician on a ladder installing ceiling lights in an open office",
  },
]

export function ServiceRows() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pt-10 pb-16 md:gap-24 md:pt-16 md:pb-24">
      {services.map((service, i) => (
        <article
          key={service.id}
          id={service.id}
          aria-labelledby={`${service.id}-heading`}
          className="grid scroll-mt-6 gap-6 md:grid-cols-2 md:items-center md:gap-12"
        >
          <Image
            src={service.image}
            alt={service.alt}
            placeholder="blur"
            sizes="(min-width: 1152px) 552px, (min-width: 768px) 50vw, 100vw"
            className={cn(
              "aspect-4/3 h-auto w-full rounded-2xl object-cover",
              i % 2 === 1 && "md:order-last"
            )}
          />
          <div className="flex flex-col gap-4">
            <h2
              id={`${service.id}-heading`}
              className="text-2xl font-extrabold md:text-3xl"
            >
              {service.title}
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {service.description}
            </p>
            <Button
              asChild
              className="mt-2 h-12 w-full px-6 text-base font-bold sm:w-auto sm:self-start"
            >
              <Link href="/contact">Get a free estimate</Link>
            </Button>
          </div>
        </article>
      ))}
    </div>
  )
}
