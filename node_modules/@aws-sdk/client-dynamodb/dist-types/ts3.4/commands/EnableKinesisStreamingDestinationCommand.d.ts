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
  KinesisStreamingDestinationInput,
  KinesisStreamingDestinationOutput,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface EnableKinesisStreamingDestinationCommandInput
  extends KinesisStreamingDestinationInput {}
export interface EnableKinesisStreamingDestinationCommandOutput
  extends KinesisStreamingDestinationOutput,
    __MetadataBearer {}
export declare class EnableKinesisStreamingDestinationCommand extends $Command<
  EnableKinesisStreamingDestinationCommandInput,
  EnableKinesisStreamingDestinationCommandOutput,
  DynamoDBClientResolvedConfig
> {
  readonly input: EnableKinesisStreamingDestinationCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: EnableKinesisStreamingDestinationCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    EnableKinesisStreamingDestinationCommandInput,
    EnableKinesisStreamingDestinationCommandOutput
  >;
  private serialize;
  private deserialize;
}
