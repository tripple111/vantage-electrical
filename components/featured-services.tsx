import Link from "next/link"
import { ArrowRightIcon, Building2Icon, HomeIcon, ZapIcon } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// Placeholder copy for the three featured services.
const services = [
  {
    name: "Emergency repairs",
    href: "/services#emergency-repairs",
    description:
      "Fast, round-the-clock help when power fails or something's unsafe.",
    icon: ZapIcon,
  },
  {
    name: "Residential electrical",
    href: "/services#residential-electrical",
    description: "Rewiring, lighting, outlets and safety checks for your home.",
    icon: HomeIcon,
  },
  {
    name: "Commercial electrical",
    href: "/services#commercial-electrical",
    description:
      "Installations and maintenance that keep your business running.",
    icon: Building2Icon,
  },
]

export function FeaturedServices() {
  return (
    <section aria-labelledby="services-heading">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2
          id="services-heading"
          className="mb-6 text-2xl font-extrabold md:mb-8 md:text-3xl"
        >
          Our Services
        </h2>

        <ul className="grid gap-4 md:grid-cols-3 md:gap-6">
          {services.map(({ name, href, description, icon: Icon }) => (
            <li key={name}>
              <Link
                href={href}
                className="group block h-full rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <Card className="h-full transition-shadow [--card-spacing:--spacing(5)] group-hover:shadow-md md:[--card-spacing:--spacing(6)]">
                  <CardHeader className="gap-2">
                    <span className="mb-2 flex size-11 items-center justify-center rounded-lg bg-muted">
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <CardTitle>
                      <h3 className="text-lg">{name}</h3>
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold underline-offset-4 group-hover:underline">
                      Learn more
                      <ArrowRightIcon className="size-4" aria-hidden="true" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
