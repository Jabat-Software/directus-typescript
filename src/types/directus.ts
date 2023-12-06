import type {
  ActionHandler,
  FilterHandler,
  InitHandler,
  ScheduleHandler,
  EmbedHandler,
  SchemaOverview,
} from '@directus/types';
import { Emitter } from '@directus/api/emitter';
import { Knex } from 'knex';
import { Logger, LoggerOptions } from 'pino';
import {
  ActivityService,
  AssetsService,
  AuthenticationService,
  AuthorizationService,
  CollectionsService,
  DashboardsService,
  ExtensionsService,
  FieldsService,
  FilesService,
  FlowsService,
  FoldersService,
  GraphQLService,
  ItemsService,
  MailService,
  MetaService,
} from '@directus/api/services/index';

export type RegisterHookFunctions = {
  filter: (event: string, handler: FilterHandler) => void;
  action: (event: string, handler: ActionHandler) => void;
  init: (event: string, handler: InitHandler) => void;
  schedule: (cron: string, handler: ScheduleHandler) => void;
  embed: (position: 'head' | 'body', code: string | EmbedHandler) => void;
};

export type RegisterEndpointFunctions = {
  services: DirectusServices;
  database: Knex<any, any[]>;
  env: Record<string, any>;
  emitter: Emitter;
  logger: Logger<LoggerOptions & Record<string, any>>;
  getSchema(options?: { database?: Knex; bypassCache?: boolean }): Promise<SchemaOverview>;
};

export type DirectusServices = {
  ActivityService: typeof ActivityService;
  AssetsService: typeof AssetsService;
  AuthenticationService: typeof AuthenticationService;
  AuthorizationService: typeof AuthorizationService;
  CollectionsService: typeof CollectionsService;
  DashboardsService: typeof DashboardsService;
  ExtensionsService: typeof ExtensionsService;
  FieldsService: typeof FieldsService;
  FilesServices: typeof FilesService;
  FlowsService: typeof FlowsService;
  FoldersServices: typeof FoldersService;
  GraphQLService: typeof GraphQLService;
  ItemsService: typeof ItemsService;
  MailService: typeof MailService;
  MetaService: typeof MetaService;

  // TODO: Add the rest of the services
};

export type ItemsQueryMeta = {
  collection: string;
  event: string;
};
