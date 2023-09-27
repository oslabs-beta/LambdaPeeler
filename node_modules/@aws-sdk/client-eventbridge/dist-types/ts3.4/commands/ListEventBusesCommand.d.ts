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
  ListEventBusesRequest,
  ListEventBusesResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListEventBusesCommandInput extends ListEventBusesRequest {}
export interface ListEventBusesCommandOutput
  extends ListEventBusesResponse,
    __MetadataBearer {}
export declare class ListEventBusesCommand extends $Command<
  ListEventBusesCommandInput,
  ListEventBusesCommandOutput,
  EventBridgeClientResolvedConfig
> {
  readonly input: ListEventBusesCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListEventBusesCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEventBusesCommandInput, ListEventBusesCommandOutput>;
  private serialize;
  private deserialize;
}
