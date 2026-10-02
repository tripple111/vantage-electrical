import { ContactFormShell } from "@/components/contact-form-shell"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const services = [
  "Emergency repairs",
  "Residential electrical",
  "Commercial electrical",
  "Other / not sure",
]

const requestTypes = [
  { id: "request-urgent", value: "urgent", label: "Urgent – call me" },
  { id: "request-visit", value: "visit", label: "Schedule a visit" },
]

const timeWindows = [
  { id: "time-morning", value: "morning", label: "Morning" },
  { id: "time-afternoon", value: "afternoon", label: "Afternoon" },
]

// Shared sizing so every control is full width and easy to tap.
const fieldClass =
  "h-12 border-foreground/50 bg-card px-3 text-base md:text-base"
const labelClass = "text-base font-semibold"
const optionalHint = (
  <span className="font-normal text-muted-foreground">(optional)</span>
)

function RadioOptions({
  name,
  labelId,
  required,
  options,
}: {
  name: string
  labelId: string
  required?: boolean
  options: { id: string; value: string; label: string }[]
}) {
  return (
    <RadioGroup
      name={name}
      required={required}
      aria-labelledby={labelId}
      className="gap-3 sm:grid-cols-2"
    >
      {options.map((option) => (
        <Label
          key={option.id}
          htmlFor={option.id}
          className="h-12 cursor-pointer gap-3 rounded-lg border border-foreground/50 bg-card px-3 text-base has-data-checked:border-foreground has-data-checked:ring-1 has-data-checked:ring-foreground"
        >
          <RadioGroupItem
            id={option.id}
            value={option.value}
            className="size-5 border-foreground/50"
          />
          {option.label}
        </Label>
      ))}
    </RadioGroup>
  )
}

export function ContactForm() {
  return (
    <Card className="[--card-spacing:--spacing(5)] md:[--card-spacing:--spacing(8)]">
      <CardContent>
        <ContactFormShell>
          <div className="flex flex-col gap-2">
            <Label htmlFor="name" className={labelClass}>
              Name
            </Label>
            <Input
              id="name"
              name="name"
              autoComplete="name"
              required
              className={fieldClass}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="phone" className={labelClass}>
              Phone
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              className={fieldClass}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email" className={labelClass}>
              Email {optionalHint}
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className={fieldClass}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="service" className={labelClass}>
              Service needed
            </Label>
            <Select name="service" required>
              <SelectTrigger
                id="service"
                className="w-full border-foreground/50 bg-card px-3 text-base data-[size=default]:h-12"
              >
                <SelectValue placeholder="Choose a service" />
              </SelectTrigger>
              <SelectContent position="popper">
                {services.map((service) => (
                  <SelectItem
                    key={service}
                    value={service}
                    className="py-2.5 text-base"
                  >
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <span id="request-type-label" className={labelClass}>
              Request type
            </span>
            <RadioOptions
              name="requestType"
              labelId="request-type-label"
              required
              options={requestTypes}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="date" className={labelClass}>
              Preferred date {optionalHint}
            </Label>
            <Input id="date" name="date" type="date" className={fieldClass} />
          </div>

          <div className="flex flex-col gap-2">
            <span id="time-window-label" className={labelClass}>
              Time window {optionalHint}
            </span>
            <RadioOptions
              name="timeWindow"
              labelId="time-window-label"
              options={timeWindows}
            />
          </div>

          <Button
            type="submit"
            className="mt-2 h-12 w-full px-8 text-base font-bold sm:w-auto sm:self-start"
          >
            Send request
          </Button>
        </ContactFormShell>
      </CardContent>
    </Card>
  )
}
