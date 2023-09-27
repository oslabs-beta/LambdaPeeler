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
  DescribeEventBusRequest,
  DescribeEventBusResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DescribeEventBusCommandInput extends DescribeEventBusRequest {}
export interface DescribeEventBusCommandOutput
  extends DescribeEventBusResponse,
    __MetadataBearer {}
export declare class DescribeEventBusCommand extends $Command<
  DescribeEventBusCommandInput,
  DescribeEventBusCommandOutput,
  EventBridgeClientResolvedConfig
> {
  readonly input: DescribeEventBusCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeEventBusCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEventBusCommandInput, DescribeEventBusCommandOutput>;
  private serialize;
  private deserialize;
}
