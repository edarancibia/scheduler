import { EventInput } from '@fullcalendar/core';

export type CalendarProps = {
  events: EventInput[];
  onDateClick: (date: Date) => void;
  onEventClick: (event: any) => void;
}
