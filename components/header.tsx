import Link from "next/link"
import { MenuIcon, PhoneIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const PHONE_DISPLAY = "01234 567890"
const PHONE_HREF = "tel:01234567890"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  return (
    <header className="bg-secondary text-secondary-foreground">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 md:h-20 md:gap-8">
        <Link
          href="/"
          className="flex flex-col font-heading leading-none rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary-foreground"
        >
          <span className="text-xl font-extrabold">Vantage</span>{" "}
          <span className="text-xs font-bold uppercase tracking-[0.2em]">
            Electrical
          </span>
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-semibold underline-offset-8 hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 md:gap-6">
          <a
            href={PHONE_HREF}
            className="hidden items-center gap-2 font-semibold md:flex"
          >
            <PhoneIcon className="size-4" aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>

          <Button asChild className="h-10 px-4 text-sm font-bold">
            <a href={PHONE_HREF}>
              <PhoneIcon aria-hidden="true" />
              Call Now
            </a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="size-10 text-secondary-foreground hover:bg-secondary-foreground/10 hover:text-secondary-foreground aria-expanded:bg-secondary-foreground/10 aria-expanded:text-secondary-foreground md:hidden"
              >
                <MenuIcon className="size-6" aria-hidden="true" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="text-lg font-bold">Menu</SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile" className="px-4">
                <ul className="flex flex-col">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <SheetClose asChild>
                        <Link
                          href={link.href}
                          className="block border-b border-border py-3 text-base font-semibold"
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
              <a
                href={PHONE_HREF}
                className="mx-4 flex items-center gap-2 py-3 text-base font-semibold"
              >
                <PhoneIcon className="size-4" aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
