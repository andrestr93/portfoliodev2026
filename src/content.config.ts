import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

const mesAnio = z
    .string()
    .regex(/^\d{4}-(0[1-9]|1[0-2])$/, 'Formato esperado: YYYY-MM (ej. "2022-03")');

const experience = defineCollection({
    loader: file('src/data.json'),
    schema: z.object({
        company: z.string().min(1),
        role: z.string().min(1),
        startDate: mesAnio,
        endDate: mesAnio.nullable(),
        location: z.string().optional(),
        achievements: z.array(z.string()).min(1, 'Añade al menos un logro'),
        technologies: z.array(z.string()).min(1),

    }),
});

export const collections = { experience };