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
  DescribeConnectionRequest,
  DescribeConnectionResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DescribeConnectionCommandInput
  extends DescribeConnectionRequest {}
export interface DescribeConnectionCommandOutput
  extends DescribeConnectionResponse,
    __MetadataBearer {}
export declare class DescribeConnectionCommand extends $Command<
  DescribeConnectionCommandInput,
  DescribeConnectionCommandOutput,
  EventBridgeClientResolvedConfig
> {
  readonly input: DescribeConnectionCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeConnectionCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeConnectionCommandInput, DescribeConnectionCommandOutput>;
  private serialize;
  private deserialize;
}
