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
  PutPartnerEventsRequest,
  PutPartnerEventsResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface PutPartnerEventsCommandInput extends PutPartnerEventsRequest {}
export interface PutPartnerEventsCommandOutput
  extends PutPartnerEventsResponse,
    __MetadataBearer {}
export declare class PutPartnerEventsCommand extends $Command<
  PutPartnerEventsCommandInput,
  PutPartnerEventsCommandOutput,
  EventBridgeClientResolvedConfig
> {
  readonly input: PutPartnerEventsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: PutPartnerEventsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutPartnerEventsCommandInput, PutPartnerEventsCommandOutput>;
  private serialize;
  private deserialize;
}
