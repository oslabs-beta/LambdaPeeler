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
import { DeactivateEventSourceRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DeactivateEventSourceCommandInput
  extends DeactivateEventSourceRequest {}
export interface DeactivateEventSourceCommandOutput extends __MetadataBearer {}
export declare class DeactivateEventSourceCommand extends $Command<
  DeactivateEventSourceCommandInput,
  DeactivateEventSourceCommandOutput,
  EventBridgeClientResolvedConfig
> {
  readonly input: DeactivateEventSourceCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeactivateEventSourceCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeactivateEventSourceCommandInput,
    DeactivateEventSourceCommandOutput
  >;
  private serialize;
  private deserialize;
}
