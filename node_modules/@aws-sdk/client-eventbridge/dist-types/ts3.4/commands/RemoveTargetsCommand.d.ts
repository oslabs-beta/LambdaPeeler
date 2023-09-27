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
  RemoveTargetsRequest,
  RemoveTargetsResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface RemoveTargetsCommandInput extends RemoveTargetsRequest {}
export interface RemoveTargetsCommandOutput
  extends RemoveTargetsResponse,
    __MetadataBearer {}
export declare class RemoveTargetsCommand extends $Command<
  RemoveTargetsCommandInput,
  RemoveTargetsCommandOutput,
  EventBridgeClientResolvedConfig
> {
  readonly input: RemoveTargetsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: RemoveTargetsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveTargetsCommandInput, RemoveTargetsCommandOutput>;
  private serialize;
  private deserialize;
}
