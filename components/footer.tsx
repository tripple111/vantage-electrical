import { MailIcon, PhoneIcon } from "lucide-react"

import { site } from "@/lib/site"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <section aria-labelledby="footer-contact">
            <h2 id="footer-contact" className="mb-3 text-lg">
              Contact us
            </h2>
            <address className="flex flex-col gap-2 not-italic">
              <a
                href={site.phone.href}
                className="flex items-center gap-2 underline-offset-4 hover:underline"
              >
                <PhoneIcon className="size-4" aria-hidden="true" />
                {site.phone.display}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 break-all underline-offset-4 hover:underline"
              >
                <MailIcon className="size-4 shrink-0" aria-hidden="true" />
                {site.email}
              </a>
            </address>
          </section>

          <section aria-labelledby="footer-areas">
            <h2 id="footer-areas" className="mb-3 text-lg">
              Areas we cover
            </h2>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-1">
              {site.serviceAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </section>
        </div>

        <p className="mt-10 border-t border-secondary-foreground/20 pt-6 text-sm text-secondary-foreground/80">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
