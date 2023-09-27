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
  DeauthorizeConnectionRequest,
  DeauthorizeConnectionResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DeauthorizeConnectionCommandInput
  extends DeauthorizeConnectionRequest {}
export interface DeauthorizeConnectionCommandOutput
  extends DeauthorizeConnectionResponse,
    __MetadataBearer {}
export declare class DeauthorizeConnectionCommand extends $Command<
  DeauthorizeConnectionCommandInput,
  DeauthorizeConnectionCommandOutput,
  EventBridgeClientResolvedConfig
> {
  readonly input: DeauthorizeConnectionCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeauthorizeConnectionCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeauthorizeConnectionCommandInput,
    DeauthorizeConnectionCommandOutput
  >;
  private serialize;
  private deserialize;
}
