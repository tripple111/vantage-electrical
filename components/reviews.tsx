import { StarIcon } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

// Placeholder testimonials.
const reviews = [
  {
    name: "Sarah",
    town: "Lakewood",
    quote:
      "Our power went out late on a Friday and Vantage had someone here within the hour. Friendly, clean and fairly priced.",
  },
  {
    name: "James",
    town: "Oak Grove",
    quote:
      "They rewired our whole kitchen and kept us updated at every step. Couldn't recommend them more.",
  },
  {
    name: "Priya",
    town: "Cedar Park",
    quote:
      "Booked a safety check for our rental apartment and it was quick, thorough and explained clearly.",
  },
  {
    name: "Tom",
    town: "Maple Heights",
    quote:
      "Installed new lighting across our store without disrupting business. Excellent work.",
  },
]

export function Reviews() {
  return (
    <section aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2
          id="reviews-heading"
          className="mb-6 text-2xl font-extrabold md:mb-8 md:text-3xl"
        >
          What our customers say
        </h2>

        <ul className="grid gap-4 md:grid-cols-2 md:gap-6">
          {reviews.map(({ name, town, quote }) => (
            <li key={name}>
              <Card className="h-full [--card-spacing:--spacing(5)] md:[--card-spacing:--spacing(6)]">
                <CardContent className="h-full">
                  <figure className="flex h-full flex-col gap-4">
                    <div
                      role="img"
                      aria-label="5 out of 5 stars"
                      className="flex gap-1"
                    >
                      {Array.from({ length: 5 }, (_, i) => (
                        <StarIcon
                          key={i}
                          className="size-5 fill-current"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <blockquote>
                      <p className="text-base leading-relaxed">“{quote}”</p>
                    </blockquote>
                    <figcaption className="mt-auto text-sm">
                      <span className="font-semibold">{name}</span>
                      <span className="text-muted-foreground"> · {town}</span>
                    </figcaption>
                  </figure>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
