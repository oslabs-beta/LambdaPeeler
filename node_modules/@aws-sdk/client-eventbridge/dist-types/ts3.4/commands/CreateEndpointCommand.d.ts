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
  CreateEndpointRequest,
  CreateEndpointResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface CreateEndpointCommandInput extends CreateEndpointRequest {}
export interface CreateEndpointCommandOutput
  extends CreateEndpointResponse,
    __MetadataBearer {}
export declare class CreateEndpointCommand extends $Command<
  CreateEndpointCommandInput,
  CreateEndpointCommandOutput,
  EventBridgeClientResolvedConfig
> {
  readonly input: CreateEndpointCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CreateEndpointCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateEndpointCommandInput, CreateEndpointCommandOutput>;
  private serialize;
  private deserialize;
}
