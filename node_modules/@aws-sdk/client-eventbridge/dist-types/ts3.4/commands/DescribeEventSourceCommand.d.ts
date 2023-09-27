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
  DescribeEventSourceRequest,
  DescribeEventSourceResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DescribeEventSourceCommandInput
  extends DescribeEventSourceRequest {}
export interface DescribeEventSourceCommandOutput
  extends DescribeEventSourceResponse,
    __MetadataBearer {}
export declare class DescribeEventSourceCommand extends $Command<
  DescribeEventSourceCommandInput,
  DescribeEventSourceCommandOutput,
  EventBridgeClientResolvedConfig
> {
  readonly input: DescribeEventSourceCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeEventSourceCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEventSourceCommandInput, DescribeEventSourceCommandOutput>;
  private serialize;
  private deserialize;
}
