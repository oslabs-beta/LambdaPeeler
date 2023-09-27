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
  UpdateArchiveRequest,
  UpdateArchiveResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface UpdateArchiveCommandInput extends UpdateArchiveRequest {}
export interface UpdateArchiveCommandOutput
  extends UpdateArchiveResponse,
    __MetadataBearer {}
export declare class UpdateArchiveCommand extends $Command<
  UpdateArchiveCommandInput,
  UpdateArchiveCommandOutput,
  EventBridgeClientResolvedConfig
> {
  readonly input: UpdateArchiveCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: UpdateArchiveCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateArchiveCommandInput, UpdateArchiveCommandOutput>;
  private serialize;
  private deserialize;
}
