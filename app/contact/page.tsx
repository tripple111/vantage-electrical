import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Vantage Electrical for urgent service or to book a visit.",
};

export default function ContactPage() {
  return (
    <>
    <section aria-labelledby="contact-intro-heading">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-16">
        <h1
          id="contact-intro-heading"
          className="text-3xl leading-tight font-extrabold text-balance md:text-5xl"
        >
          Get in Touch
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground md:mt-6 md:text-xl">
          Need an electrician urgently or want to book a visit? Send us your
          details and we&apos;ll get back to you quickly.
        </p>
      </div>
    </section>
    <div className="mx-auto w-full max-w-6xl px-4">
      <hr className="border-border" />
    </div>
    <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 pt-10 pb-16 md:grid-cols-2 md:gap-12 md:pt-16 md:pb-24">
      <ContactForm />
      {/* Info column (phone, email, hours, service area) goes here. */}
    </div>
    </>
  );
}
