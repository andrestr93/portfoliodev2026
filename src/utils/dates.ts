import { getCollection } from "astro:content";

export const experiences = (await getCollection('experience'))
    .map(({ id, data }) => ({ id, ...data }))
    .sort((a, b) => b.startDate.localeCompare(a.startDate));