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
  ListEndpointsRequest,
  ListEndpointsResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListEndpointsCommandInput extends ListEndpointsRequest {}
export interface ListEndpointsCommandOutput
  extends ListEndpointsResponse,
    __MetadataBearer {}
export declare class ListEndpointsCommand extends $Command<
  ListEndpointsCommandInput,
  ListEndpointsCommandOutput,
  EventBridgeClientResolvedConfig
> {
  readonly input: ListEndpointsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListEndpointsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEndpointsCommandInput, ListEndpointsCommandOutput>;
  private serialize;
  private deserialize;
}
