import { Paginator } from "@smithy/types";
import {
  ListContributorInsightsCommandInput,
  ListContributorInsightsCommandOutput,
} from "../commands/ListContributorInsightsCommand";
import { DynamoDBPaginationConfiguration } from "./Interfaces";
export declare function paginateListContributorInsights(
  config: DynamoDBPaginationConfiguration,
  input: ListContributorInsightsCommandInput,
  ...additionalArguments: any
): Paginator<ListContributorInsightsCommandOutput>;
