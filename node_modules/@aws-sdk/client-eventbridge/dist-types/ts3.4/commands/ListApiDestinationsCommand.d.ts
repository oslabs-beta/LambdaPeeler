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
  ListApiDestinationsRequest,
  ListApiDestinationsResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListApiDestinationsCommandInput
  extends ListApiDestinationsRequest {}
export interface ListApiDestinationsCommandOutput
  extends ListApiDestinationsResponse,
    __MetadataBearer {}
export declare class ListApiDestinationsCommand extends $Command<
  ListApiDestinationsCommandInput,
  ListApiDestinationsCommandOutput,
  EventBridgeClientResolvedConfig
> {
  readonly input: ListApiDestinationsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListApiDestinationsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListApiDestinationsCommandInput, ListApiDestinationsCommandOutput>;
  private serialize;
  private deserialize;
}
