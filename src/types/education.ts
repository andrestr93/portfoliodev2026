import type { CollectionEntry } from 'astro:content';

export type Education = CollectionEntry<'education'>['data'] & { id: string };

export interface TimelineProps {
    education: Education[];

}

export interface EducationItemProps {
    education: Education;

}