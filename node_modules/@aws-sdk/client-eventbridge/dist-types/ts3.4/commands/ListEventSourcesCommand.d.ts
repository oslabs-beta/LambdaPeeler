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
  ListEventSourcesRequest,
  ListEventSourcesResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListEventSourcesCommandInput extends ListEventSourcesRequest {}
export interface ListEventSourcesCommandOutput
  extends ListEventSourcesResponse,
    __MetadataBearer {}
export declare class ListEventSourcesCommand extends $Command<
  ListEventSourcesCommandInput,
  ListEventSourcesCommandOutput,
  EventBridgeClientResolvedConfig
> {
  readonly input: ListEventSourcesCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListEventSourcesCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEventSourcesCommandInput, ListEventSourcesCommandOutput>;
  private serialize;
  private deserialize;
}
