import { experiences } from './dates';
import { monthsBetween } from './format';

export const yearsOfExperience = Math.floor(
    experiences.reduce((total, e) => total + monthsBetween(e.startDate,
        e.endDate), 0) / 12,
);