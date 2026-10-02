import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Vantage Electrical",
  description:
    "Emergency repairs, residential and commercial electrical work from your local electricians.",
};

export default function ServicesPage() {
  return (
    <section aria-labelledby="services-intro-heading">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-16">
        <h1
          id="services-intro-heading"
          className="text-3xl leading-tight font-extrabold text-balance md:text-5xl"
        >
          Our Services
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground md:mt-6 md:text-xl">
          From emergency call-outs to full rewires, Vantage keeps homes and
          businesses across the local area safely powered.
        </p>
      </div>
    </section>
  );
}
