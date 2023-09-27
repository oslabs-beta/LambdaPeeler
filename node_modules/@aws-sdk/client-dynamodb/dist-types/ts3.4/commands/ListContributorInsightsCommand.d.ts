import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DynamoDBClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DynamoDBClient";
import {
  ListContributorInsightsInput,
  ListContributorInsightsOutput,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListContributorInsightsCommandInput
  extends ListContributorInsightsInput {}
export interface ListContributorInsightsCommandOutput
  extends ListContributorInsightsOutput,
    __MetadataBearer {}
export declare class ListContributorInsightsCommand extends $Command<
  ListContributorInsightsCommandInput,
  ListContributorInsightsCommandOutput,
  DynamoDBClientResolvedConfig
> {
  readonly input: ListContributorInsightsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListContributorInsightsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListContributorInsightsCommandInput,
    ListContributorInsightsCommandOutput
  >;
  private serialize;
  private deserialize;
}
