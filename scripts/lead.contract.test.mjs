import assert from "node:assert/strict";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(4000),
  source: z.string().trim().max(80).default("website"),
  honeypot: z.string().max(200).optional().default(""),
  projectType: z.string().optional(),
  location: z.string().optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
});

const good = leadSchema.safeParse({
  name: "Jordan Reid",
  email: "jordan@example.com",
  message: "Need hurricane windows for a Kingston home.",
  source: "test",
  honeypot: "",
  projectType: "Windows",
  location: "Kingston",
});
assert.equal(good.success, true);

const bad = leadSchema.safeParse({
  name: "J",
  email: "nope",
  message: "short",
});
assert.equal(bad.success, false);

console.log("lead.contract.test: ok");
