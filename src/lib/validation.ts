import z from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name must be less than 50 characters long"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format"),
  website: z
    .string()
    .url("Invalid website URL")
    .max(200, "Website URL must be less than 200 characters long")
    .optional(),
  companySize: z
    .enum(["1-10", "11-50", "51-200", "201-500", "501-1000", "1000+"])
    .optional(),
  company: z
    .string()
    .min(2, "Company name must be at least 2 characters long")
    .max(100, "Company name must be less than 100 characters long")
    .optional(),
  useCase: z
    .string()
    .min(10, "Use case description must be at least 10 characters long")
    .max(1000, "Use case description must be less than 1000 characters long")
    .optional(),
});
