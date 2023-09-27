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
  DescribeArchiveRequest,
  DescribeArchiveResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DescribeArchiveCommandInput extends DescribeArchiveRequest {}
export interface DescribeArchiveCommandOutput
  extends DescribeArchiveResponse,
    __MetadataBearer {}
export declare class DescribeArchiveCommand extends $Command<
  DescribeArchiveCommandInput,
  DescribeArchiveCommandOutput,
  EventBridgeClientResolvedConfig
> {
  readonly input: DescribeArchiveCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeArchiveCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeArchiveCommandInput, DescribeArchiveCommandOutput>;
  private serialize;
  private deserialize;
}
