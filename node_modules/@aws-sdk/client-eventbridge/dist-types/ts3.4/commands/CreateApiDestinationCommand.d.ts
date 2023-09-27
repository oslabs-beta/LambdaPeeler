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
  CreateApiDestinationRequest,
  CreateApiDestinationResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface CreateApiDestinationCommandInput
  extends CreateApiDestinationRequest {}
export interface CreateApiDestinationCommandOutput
  extends CreateApiDestinationResponse,
    __MetadataBearer {}
export declare class CreateApiDestinationCommand extends $Command<
  CreateApiDestinationCommandInput,
  CreateApiDestinationCommandOutput,
  EventBridgeClientResolvedConfig
> {
  readonly input: CreateApiDestinationCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CreateApiDestinationCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateApiDestinationCommandInput,
    CreateApiDestinationCommandOutput
  >;
  private serialize;
  private deserialize;
}
