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
  UpdateEndpointRequest,
  UpdateEndpointResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface UpdateEndpointCommandInput extends UpdateEndpointRequest {}
export interface UpdateEndpointCommandOutput
  extends UpdateEndpointResponse,
    __MetadataBearer {}
export declare class UpdateEndpointCommand extends $Command<
  UpdateEndpointCommandInput,
  UpdateEndpointCommandOutput,
  EventBridgeClientResolvedConfig
> {
  readonly input: UpdateEndpointCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: UpdateEndpointCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateEndpointCommandInput, UpdateEndpointCommandOutput>;
  private serialize;
  private deserialize;
}
