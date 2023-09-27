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
  UpdateApiDestinationRequest,
  UpdateApiDestinationResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface UpdateApiDestinationCommandInput
  extends UpdateApiDestinationRequest {}
export interface UpdateApiDestinationCommandOutput
  extends UpdateApiDestinationResponse,
    __MetadataBearer {}
export declare class UpdateApiDestinationCommand extends $Command<
  UpdateApiDestinationCommandInput,
  UpdateApiDestinationCommandOutput,
  EventBridgeClientResolvedConfig
> {
  readonly input: UpdateApiDestinationCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: UpdateApiDestinationCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateApiDestinationCommandInput,
    UpdateApiDestinationCommandOutput
  >;
  private serialize;
  private deserialize;
}
