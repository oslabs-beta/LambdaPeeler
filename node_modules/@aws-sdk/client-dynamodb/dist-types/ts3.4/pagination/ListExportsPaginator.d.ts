import { Paginator } from "@smithy/types";
import {
  ListExportsCommandInput,
  ListExportsCommandOutput,
} from "../commands/ListExportsCommand";
import { DynamoDBPaginationConfiguration } from "./Interfaces";
export declare function paginateListExports(
  config: DynamoDBPaginationConfiguration,
  input: ListExportsCommandInput,
  ...additionalArguments: any
): Paginator<ListExportsCommandOutput>;
