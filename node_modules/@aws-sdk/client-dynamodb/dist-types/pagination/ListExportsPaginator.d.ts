import { Paginator } from "@smithy/types";
import { ListExportsCommandInput, ListExportsCommandOutput } from "../commands/ListExportsCommand";
import { DynamoDBPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateListExports(config: DynamoDBPaginationConfiguration, input: ListExportsCommandInput, ...additionalArguments: any): Paginator<ListExportsCommandOutput>;
