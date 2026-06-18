import { z } from 'zod';

export const contactFormSchema = z.object({
  username: z.string()
    .trim()
    .min(3, "Username must be at least 3 characters long")
    .max(20, 'Username must be at most 20 characters long')
    .regex(/^[a-zA-Z0-9_]+$/, 'Username only can contain letters, numbers, and underscores'),

    lastname: z.string()
    .trim()
    .min(3, "Lastname must be at least 3 characters long")
    .max(20, 'Lastname must be at most 20 characters long')
    .regex(/^[a-zA-Z0-9_]+$/, 'Username only can contain letters, numbers, and underscores'),
    
    email: z.string()
    .trim()
    .min(1, 'Email requires at least 1 character')
    .refine((val) => val.endsWith("@gmail.com"), {
      error: "Only email addresses are allowed",
    })
    .toLowerCase(),

    message: z.string()
    .trim()
    .min(10, "Message must be at least 10 characters long")
    .max(500,"Message cannot exceed 500 characters"),

    checkbox: z.coerce.boolean()
    .refine((val) => val === true, {
      error: "You must accept the policy and conditions",
    })
});

export default contactFormSchema;