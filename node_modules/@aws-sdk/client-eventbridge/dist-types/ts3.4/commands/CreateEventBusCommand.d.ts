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
  CreateEventBusRequest,
  CreateEventBusResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface CreateEventBusCommandInput extends CreateEventBusRequest {}
export interface CreateEventBusCommandOutput
  extends CreateEventBusResponse,
    __MetadataBearer {}
export declare class CreateEventBusCommand extends $Command<
  CreateEventBusCommandInput,
  CreateEventBusCommandOutput,
  EventBridgeClientResolvedConfig
> {
  readonly input: CreateEventBusCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CreateEventBusCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateEventBusCommandInput, CreateEventBusCommandOutput>;
  private serialize;
  private deserialize;
}
