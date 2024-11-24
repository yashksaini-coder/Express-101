import { z } from 'zod';

export const patientSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    age: z.number().min(0).max(150),
    email: z.string().email('Invalid email format'),
    phone: z.string().regex(/^\d{10}$/, 'Phone number must be 10 digits'),
    symptoms: z.string().min(10, 'Please describe your symptoms in detail')
});
