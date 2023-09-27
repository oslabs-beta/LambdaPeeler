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
  DescribeContributorInsightsInput,
  DescribeContributorInsightsOutput,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DescribeContributorInsightsCommandInput
  extends DescribeContributorInsightsInput {}
export interface DescribeContributorInsightsCommandOutput
  extends DescribeContributorInsightsOutput,
    __MetadataBearer {}
export declare class DescribeContributorInsightsCommand extends $Command<
  DescribeContributorInsightsCommandInput,
  DescribeContributorInsightsCommandOutput,
  DynamoDBClientResolvedConfig
> {
  readonly input: DescribeContributorInsightsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeContributorInsightsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeContributorInsightsCommandInput,
    DescribeContributorInsightsCommandOutput
  >;
  private serialize;
  private deserialize;
}
