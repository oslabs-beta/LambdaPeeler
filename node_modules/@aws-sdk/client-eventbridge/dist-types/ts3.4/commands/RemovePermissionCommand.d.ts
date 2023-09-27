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
import { RemovePermissionRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface RemovePermissionCommandInput extends RemovePermissionRequest {}
export interface RemovePermissionCommandOutput extends __MetadataBearer {}
export declare class RemovePermissionCommand extends $Command<
  RemovePermissionCommandInput,
  RemovePermissionCommandOutput,
  EventBridgeClientResolvedConfig
> {
  readonly input: RemovePermissionCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: RemovePermissionCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemovePermissionCommandInput, RemovePermissionCommandOutput>;
  private serialize;
  private deserialize;
}
