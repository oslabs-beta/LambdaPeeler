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
  DescribePartnerEventSourceRequest,
  DescribePartnerEventSourceResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DescribePartnerEventSourceCommandInput
  extends DescribePartnerEventSourceRequest {}
export interface DescribePartnerEventSourceCommandOutput
  extends DescribePartnerEventSourceResponse,
    __MetadataBearer {}
export declare class DescribePartnerEventSourceCommand extends $Command<
  DescribePartnerEventSourceCommandInput,
  DescribePartnerEventSourceCommandOutput,
  EventBridgeClientResolvedConfig
> {
  readonly input: DescribePartnerEventSourceCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribePartnerEventSourceCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribePartnerEventSourceCommandInput,
    DescribePartnerEventSourceCommandOutput
  >;
  private serialize;
  private deserialize;
}
