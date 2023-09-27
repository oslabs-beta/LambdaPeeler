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
  DescribeGlobalTableInput,
  DescribeGlobalTableOutput,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DescribeGlobalTableCommandInput
  extends DescribeGlobalTableInput {}
export interface DescribeGlobalTableCommandOutput
  extends DescribeGlobalTableOutput,
    __MetadataBearer {}
export declare class DescribeGlobalTableCommand extends $Command<
  DescribeGlobalTableCommandInput,
  DescribeGlobalTableCommandOutput,
  DynamoDBClientResolvedConfig
> {
  readonly input: DescribeGlobalTableCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeGlobalTableCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeGlobalTableCommandInput, DescribeGlobalTableCommandOutput>;
  private serialize;
  private deserialize;
}
