// Generated by Xata Codegen 0.23.2. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "content",
    columns: [
      { name: "url", type: "string" },
      { name: "title", type: "string" },
      { name: "website", type: "string" },
      { name: "content", type: "text" },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Content = InferredTypes["content"];
export type ContentRecord = Content & XataRecord;

export type DatabaseSchema = {
  content: ContentRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL: "https://demo-uni3q8.us-east-1.xata.sh/db/askyourstack",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
