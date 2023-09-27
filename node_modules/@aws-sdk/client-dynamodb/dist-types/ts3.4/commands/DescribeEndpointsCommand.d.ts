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
  DescribeEndpointsRequest,
  DescribeEndpointsResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DescribeEndpointsCommandInput
  extends DescribeEndpointsRequest {}
export interface DescribeEndpointsCommandOutput
  extends DescribeEndpointsResponse,
    __MetadataBearer {}
export declare class DescribeEndpointsCommand extends $Command<
  DescribeEndpointsCommandInput,
  DescribeEndpointsCommandOutput,
  DynamoDBClientResolvedConfig
> {
  readonly input: DescribeEndpointsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeEndpointsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEndpointsCommandInput, DescribeEndpointsCommandOutput>;
  private serialize;
  private deserialize;
}
