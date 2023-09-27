import { Paginator } from "@smithy/types";
import { ScanCommandInput, ScanCommandOutput } from "../commands/ScanCommand";
import { DynamoDBPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateScan(config: DynamoDBPaginationConfiguration, input: ScanCommandInput, ...additionalArguments: any): Paginator<ScanCommandOutput>;
