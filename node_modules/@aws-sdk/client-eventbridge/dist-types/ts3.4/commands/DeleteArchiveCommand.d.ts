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
  DeleteArchiveRequest,
  DeleteArchiveResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DeleteArchiveCommandInput extends DeleteArchiveRequest {}
export interface DeleteArchiveCommandOutput
  extends DeleteArchiveResponse,
    __MetadataBearer {}
export declare class DeleteArchiveCommand extends $Command<
  DeleteArchiveCommandInput,
  DeleteArchiveCommandOutput,
  EventBridgeClientResolvedConfig
> {
  readonly input: DeleteArchiveCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteArchiveCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteArchiveCommandInput, DeleteArchiveCommandOutput>;
  private serialize;
  private deserialize;
}
