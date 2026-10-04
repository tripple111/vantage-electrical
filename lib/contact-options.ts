// Choices offered by the contact form. The server action validates against
// these same lists, so the two can't drift apart.
export const services = [
  "Emergency repairs",
  "Residential electrical",
  "Commercial electrical",
  "Other / not sure",
] as const

export const requestTypes = [
  { id: "request-urgent", value: "urgent", label: "Urgent – call me" },
  { id: "request-visit", value: "visit", label: "Schedule a visit" },
] as const

export const timeWindows = [
  { id: "time-morning", value: "morning", label: "Morning" },
  { id: "time-afternoon", value: "afternoon", label: "Afternoon" },
] as const
