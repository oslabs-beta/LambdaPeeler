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
  DeleteEndpointRequest,
  DeleteEndpointResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DeleteEndpointCommandInput extends DeleteEndpointRequest {}
export interface DeleteEndpointCommandOutput
  extends DeleteEndpointResponse,
    __MetadataBearer {}
export declare class DeleteEndpointCommand extends $Command<
  DeleteEndpointCommandInput,
  DeleteEndpointCommandOutput,
  EventBridgeClientResolvedConfig
> {
  readonly input: DeleteEndpointCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteEndpointCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteEndpointCommandInput, DeleteEndpointCommandOutput>;
  private serialize;
  private deserialize;
}
