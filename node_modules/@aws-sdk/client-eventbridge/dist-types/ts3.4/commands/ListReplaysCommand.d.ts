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
import { ListReplaysRequest, ListReplaysResponse } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListReplaysCommandInput extends ListReplaysRequest {}
export interface ListReplaysCommandOutput
  extends ListReplaysResponse,
    __MetadataBearer {}
export declare class ListReplaysCommand extends $Command<
  ListReplaysCommandInput,
  ListReplaysCommandOutput,
  EventBridgeClientResolvedConfig
> {
  readonly input: ListReplaysCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListReplaysCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListReplaysCommandInput, ListReplaysCommandOutput>;
  private serialize;
  private deserialize;
}
