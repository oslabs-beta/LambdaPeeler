import { Paginator } from "@smithy/types";
import {
  ListImportsCommandInput,
  ListImportsCommandOutput,
} from "../commands/ListImportsCommand";
import { DynamoDBPaginationConfiguration } from "./Interfaces";
export declare function paginateListImports(
  config: DynamoDBPaginationConfiguration,
  input: ListImportsCommandInput,
  ...additionalArguments: any
): Paginator<ListImportsCommandOutput>;
