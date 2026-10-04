"use server";

import { Resend } from "resend";
import { z } from "zod";

import { requestTypes, services, timeWindows } from "@/lib/contact-options";

export type EnquiryState = { status: "idle" | "success" | "error" };

const optional = <T extends z.ZodType>(schema: T) =>
  z.union([z.literal(""), schema]).optional();

const enquirySchema = z.object({
  name: z.string().trim().min(1).max(100),
  phone: z.string().trim().min(1).max(30),
  email: optional(z.email().max(200)),
  service: z.enum(services),
  requestType: z.enum(requestTypes.map((t) => t.value)),
  date: optional(z.iso.date()),
  timeWindow: optional(z.enum(timeWindows.map((t) => t.value))),
});

const labelFor = (
  options: readonly { value: string; label: string }[],
  value: string | undefined,
) => options.find((o) => o.value === value)?.label;

export async function sendEnquiry(
  _prevState: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  const parsed = enquirySchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    console.error("Contact form rejected:", z.flattenError(parsed.error).fieldErrors);
    return { status: "error" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;
  if (!apiKey || !to) {
    console.error("Contact form: RESEND_API_KEY or CONTACT_EMAIL is not set");
    return { status: "error" };
  }

  const enquiry = parsed.data;
  const requestType = labelFor(requestTypes, enquiry.requestType);
  const fields: [string, string | undefined][] = [
    ["Name", enquiry.name],
    ["Phone", enquiry.phone],
    ["Email", enquiry.email],
    ["Service needed", enquiry.service],
    ["Request type", requestType],
    ["Preferred date", enquiry.date],
    ["Time window", labelFor(timeWindows, enquiry.timeWindow)],
  ];

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from: "Vantage Electrical <onboarding@resend.dev>",
      to,
      replyTo: enquiry.email || undefined,
      subject: `New enquiry: ${enquiry.service} (${requestType})`,
      text: fields
        .map(([label, value]) => `${label}: ${value || "Not provided"}`)
        .join("\n"),
    });
    if (error) {
      console.error("Contact form: Resend error", error);
      return { status: "error" };
    }
  } catch (error) {
    console.error("Contact form: send failed", error);
    return { status: "error" };
  }

  return { status: "success" };
}
