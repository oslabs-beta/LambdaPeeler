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
  UpdateContributorInsightsInput,
  UpdateContributorInsightsOutput,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface UpdateContributorInsightsCommandInput
  extends UpdateContributorInsightsInput {}
export interface UpdateContributorInsightsCommandOutput
  extends UpdateContributorInsightsOutput,
    __MetadataBearer {}
export declare class UpdateContributorInsightsCommand extends $Command<
  UpdateContributorInsightsCommandInput,
  UpdateContributorInsightsCommandOutput,
  DynamoDBClientResolvedConfig
> {
  readonly input: UpdateContributorInsightsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: UpdateContributorInsightsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateContributorInsightsCommandInput,
    UpdateContributorInsightsCommandOutput
  >;
  private serialize;
  private deserialize;
}
