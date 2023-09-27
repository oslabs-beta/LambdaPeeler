import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import {
  DescribeApiDestinationRequest,
  DescribeApiDestinationResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DescribeApiDestinationCommandInput
  extends DescribeApiDestinationRequest {}
export interface DescribeApiDestinationCommandOutput
  extends DescribeApiDestinationResponse,
    __MetadataBearer {}
export declare class DescribeApiDestinationCommand extends $Command<
  DescribeApiDestinationCommandInput,
  DescribeApiDestinationCommandOutput,
  EventBridgeClientResolvedConfig
> {
  readonly input: DescribeApiDestinationCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeApiDestinationCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeApiDestinationCommandInput,
    DescribeApiDestinationCommandOutput
  >;
  private serialize;
  private deserialize;
}
