const fmt = new Intl.DateTimeFormat('es-ES', {
    month: 'short', year:
        'numeric'
});

/** Periodo legible: "sept 2024 — Actualidad" o un solo mes si inicio y fin coinciden. */
export function formatPeriod(start: string, end: string | null | undefined) {
    if (end === start) return formatMonth(start);
    return `${formatMonth(start)} — ${end ? formatMonth(end) : 'Actualidad'}`;
}
export const formatMonth = (ym: string) => fmt.format(new
    Date(`${ym}-01T00:00:00`));
export function monthsBetween(start: string, end: string | null | undefined) {
    const [sy, sm] = start.split('-').map(Number);
    const now = new Date();
    const [ey, em] = end ? end.split('-').map(Number) : [now.getFullYear(),
    now.getMonth() + 1];
    return (ey - sy) * 12 + (em - sm);
}