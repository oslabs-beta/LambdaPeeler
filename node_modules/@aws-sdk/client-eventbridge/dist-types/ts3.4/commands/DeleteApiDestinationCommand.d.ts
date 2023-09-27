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
  DeleteApiDestinationRequest,
  DeleteApiDestinationResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DeleteApiDestinationCommandInput
  extends DeleteApiDestinationRequest {}
export interface DeleteApiDestinationCommandOutput
  extends DeleteApiDestinationResponse,
    __MetadataBearer {}
export declare class DeleteApiDestinationCommand extends $Command<
  DeleteApiDestinationCommandInput,
  DeleteApiDestinationCommandOutput,
  EventBridgeClientResolvedConfig
> {
  readonly input: DeleteApiDestinationCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteApiDestinationCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteApiDestinationCommandInput,
    DeleteApiDestinationCommandOutput
  >;
  private serialize;
  private deserialize;
}
