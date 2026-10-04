// Placeholder trust stats.
const stats = [
  { value: "15+", label: "Years of experience" },
  { value: "2,000+", label: "Jobs completed" },
  { value: "24/7", label: "Emergency service" },
]

export function TrustStats() {
  return (
    <section aria-label="Why choose Vantage">
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        <dl className="grid divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col-reverse items-center gap-1 py-6 text-center md:py-2"
            >
              <dt className="text-sm">{label}</dt>
              <dd className="font-heading text-4xl font-extrabold md:text-5xl">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
