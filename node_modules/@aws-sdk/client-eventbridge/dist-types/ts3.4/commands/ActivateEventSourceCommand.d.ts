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
import { ActivateEventSourceRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ActivateEventSourceCommandInput
  extends ActivateEventSourceRequest {}
export interface ActivateEventSourceCommandOutput extends __MetadataBearer {}
export declare class ActivateEventSourceCommand extends $Command<
  ActivateEventSourceCommandInput,
  ActivateEventSourceCommandOutput,
  EventBridgeClientResolvedConfig
> {
  readonly input: ActivateEventSourceCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ActivateEventSourceCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ActivateEventSourceCommandInput, ActivateEventSourceCommandOutput>;
  private serialize;
  private deserialize;
}
