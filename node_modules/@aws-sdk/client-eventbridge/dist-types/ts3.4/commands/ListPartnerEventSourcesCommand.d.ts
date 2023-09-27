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
  ListPartnerEventSourcesRequest,
  ListPartnerEventSourcesResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListPartnerEventSourcesCommandInput
  extends ListPartnerEventSourcesRequest {}
export interface ListPartnerEventSourcesCommandOutput
  extends ListPartnerEventSourcesResponse,
    __MetadataBearer {}
export declare class ListPartnerEventSourcesCommand extends $Command<
  ListPartnerEventSourcesCommandInput,
  ListPartnerEventSourcesCommandOutput,
  EventBridgeClientResolvedConfig
> {
  readonly input: ListPartnerEventSourcesCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListPartnerEventSourcesCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListPartnerEventSourcesCommandInput,
    ListPartnerEventSourcesCommandOutput
  >;
  private serialize;
  private deserialize;
}
