import { z } from "zod";

/** Lead payload — adapted from Patterns/Active/Lead-Funnel + Form-System; extended for Domus. */
export const leadSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(4000),
  source: z.string().trim().max(80).default("website"),
  honeypot: z.string().max(200).optional().default(""),
  projectType: z
    .enum([
      "Windows",
      "Doors",
      "Fencing",
      "Handrails",
      "Multiple",
      "Not sure",
    ])
    .optional(),
  location: z.string().trim().max(120).optional(),
  budget: z.string().trim().max(80).optional(),
  timeline: z.string().trim().max(80).optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;

export function validateLead(data: unknown) {
  return leadSchema.safeParse(data);
}
