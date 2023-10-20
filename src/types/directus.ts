import type { ActionHandler, FilterHandler, InitHandler, ScheduleHandler, EmbedHandler } from '@directus/types';

export type RegisterFunctions = {
  filter: (event: string, handler: FilterHandler) => void;
  action: (event: string, handler: ActionHandler) => void;
  init: (event: string, handler: InitHandler) => void;
  schedule: (cron: string, handler: ScheduleHandler) => void;
  embed: (position: 'head' | 'body', code: string | EmbedHandler) => void;
};
