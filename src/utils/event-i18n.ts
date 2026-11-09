type Translate = (key: string, vars?: Record<string, string | number>) => string;

type EventLike = { id: string; subtitle?: string; tour?: string; date: string; address?: string };

function tr(t: Translate, key: string, fallback: string): string {
  const value = t(key);
  return value === key ? fallback : value;
}

export function eventSubtitle(t: Translate, event: EventLike): string | undefined {
  if (!event.subtitle) return undefined;
  return tr(t, `event.${event.id}.subtitle`, event.subtitle);
}

export function eventTour(t: Translate, event: EventLike): string | undefined {
  if (!event.tour) return undefined;
  return tr(t, `event.${event.id}.tour`, event.tour);
}

export function eventDate(t: Translate, event: EventLike): string {
  return tr(t, `event.${event.id}.date`, event.date);
}

export function eventDateFull(t: Translate, event: EventLike): string {
  return tr(t, `event.${event.id}.dateFull`, event.date);
}

export function eventAddress(t: Translate, event: EventLike): string {
  if (!event.address) return "";
  return tr(t, `event.${event.id}.address`, event.address);
}
