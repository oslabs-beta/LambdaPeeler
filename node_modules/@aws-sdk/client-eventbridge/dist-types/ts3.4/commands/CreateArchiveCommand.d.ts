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
  CreateArchiveRequest,
  CreateArchiveResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface CreateArchiveCommandInput extends CreateArchiveRequest {}
export interface CreateArchiveCommandOutput
  extends CreateArchiveResponse,
    __MetadataBearer {}
export declare class CreateArchiveCommand extends $Command<
  CreateArchiveCommandInput,
  CreateArchiveCommandOutput,
  EventBridgeClientResolvedConfig
> {
  readonly input: CreateArchiveCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CreateArchiveCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateArchiveCommandInput, CreateArchiveCommandOutput>;
  private serialize;
  private deserialize;
}
