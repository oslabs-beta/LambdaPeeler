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
  DescribeKinesisStreamingDestinationInput,
  DescribeKinesisStreamingDestinationOutput,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DescribeKinesisStreamingDestinationCommandInput
  extends DescribeKinesisStreamingDestinationInput {}
export interface DescribeKinesisStreamingDestinationCommandOutput
  extends DescribeKinesisStreamingDestinationOutput,
    __MetadataBearer {}
export declare class DescribeKinesisStreamingDestinationCommand extends $Command<
  DescribeKinesisStreamingDestinationCommandInput,
  DescribeKinesisStreamingDestinationCommandOutput,
  DynamoDBClientResolvedConfig
> {
  readonly input: DescribeKinesisStreamingDestinationCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeKinesisStreamingDestinationCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeKinesisStreamingDestinationCommandInput,
    DescribeKinesisStreamingDestinationCommandOutput
  >;
  private serialize;
  private deserialize;
}
