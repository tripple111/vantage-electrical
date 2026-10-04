@AGENTS.md

# Vantage Electrical – Project Rules

## Project

Electrician services website, For clients looking to book urgent as well non urgent services from someone local to their area, that it's a portfolio demo
US audience - use US spelling, terms and phone formats

## Stack

Vercel. Next.js (App Router), TypeScript, Tailwind CSS v4., shadcn/ui (Radix)

## Design tokens

Colours:
60% #EBF2FA – Background
30% #14213D - Header, footer, hero, headings, body text
10% #FCA311 – Call now, get quote, submit
White #FFFFFF for cards.

Fonts:
Montserrat for headings (heavy weights, 700–800), Open Sans for body.
Contrast rules: navy text on orange buttons; never white text on orange; never orange text on light backgrounds.
Use only these tokens — no new colours or fonts.

## Pages & sections

Shared elements
Header- logo, nav links (Home, Services, Contact) , phone number +"Call Now” button
Footer- Contact details, service area list, copyright
Page1: Home

1. Hero -tagline, CTA, “Call Now” 3 trust stats along bottom
2. Featured services, 3 service: Emergency repairs, Residential electrical, Commercial electrical (name + short description), link to services page
3. Reviews- 4 client testimonial cards in 2x2 grid
4. Closing CTA band- “Need an electrician? Get a free estimate” + button to contact
   Page 2: Services
5. Page intro-short heading + one line about what Vantage covers
6. Services- 3 rows, each with title, description image, + “Get a free estimate” button
   Page 3: Contact
7. Page intro – short heading
8. Two columns:
   Form- name, phone, email, service needed (select), request type “Urgent – call me “/ “Schedule visit”, preferred date + time window (morning/ afternoon)
   Info column- phone, email, hours, service area

Form submission: a Server Action validates with Zod and sends the enquiry by email via Resend.
Keys live in .env.local (RESEND_API_KEY, CONTACT_EMAIL) and in Vercel's environment variables — never expose them in client code or commit them.

## Working rules

1. Mobile-first: build for 375px width first, then larger screens.
2. One section per task; stop after each and wait for review.
3. Ask before installing any new package.
4. Use shadcn/ui components where one fits rather than building from scratch.
5. Explain what you changed and why in plain language after each task.
6. Don't change files outside the task's scope
