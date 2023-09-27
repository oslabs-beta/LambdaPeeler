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
import { PutEventsRequest, PutEventsResponse } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface PutEventsCommandInput extends PutEventsRequest {}
export interface PutEventsCommandOutput
  extends PutEventsResponse,
    __MetadataBearer {}
export declare class PutEventsCommand extends $Command<
  PutEventsCommandInput,
  PutEventsCommandOutput,
  EventBridgeClientResolvedConfig
> {
  readonly input: PutEventsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: PutEventsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutEventsCommandInput, PutEventsCommandOutput>;
  private serialize;
  private deserialize;
}
