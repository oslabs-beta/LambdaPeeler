import { Paginator } from "@smithy/types";
import {
  ListTablesCommandInput,
  ListTablesCommandOutput,
} from "../commands/ListTablesCommand";
import { DynamoDBPaginationConfiguration } from "./Interfaces";
export declare function paginateListTables(
  config: DynamoDBPaginationConfiguration,
  input: ListTablesCommandInput,
  ...additionalArguments: any
): Paginator<ListTablesCommandOutput>;
