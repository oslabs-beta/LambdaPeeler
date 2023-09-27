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
  DescribeReplayRequest,
  DescribeReplayResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DescribeReplayCommandInput extends DescribeReplayRequest {}
export interface DescribeReplayCommandOutput
  extends DescribeReplayResponse,
    __MetadataBearer {}
export declare class DescribeReplayCommand extends $Command<
  DescribeReplayCommandInput,
  DescribeReplayCommandOutput,
  EventBridgeClientResolvedConfig
> {
  readonly input: DescribeReplayCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeReplayCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeReplayCommandInput, DescribeReplayCommandOutput>;
  private serialize;
  private deserialize;
}
