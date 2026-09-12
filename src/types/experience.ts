import type { CollectionEntry } from 'astro:content';

export type Experience = CollectionEntry<'experience'>['data'] & { id: string };

export interface TimelineProps {
    experiences: Experience[];
    title?: string;
}

export interface ExperienceItemProps {
    experience: Experience;
    isLast?: boolean;
}