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
import { DescribeLimitsInput, DescribeLimitsOutput } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DescribeLimitsCommandInput extends DescribeLimitsInput {}
export interface DescribeLimitsCommandOutput
  extends DescribeLimitsOutput,
    __MetadataBearer {}
export declare class DescribeLimitsCommand extends $Command<
  DescribeLimitsCommandInput,
  DescribeLimitsCommandOutput,
  DynamoDBClientResolvedConfig
> {
  readonly input: DescribeLimitsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeLimitsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeLimitsCommandInput, DescribeLimitsCommandOutput>;
  private serialize;
  private deserialize;
}
