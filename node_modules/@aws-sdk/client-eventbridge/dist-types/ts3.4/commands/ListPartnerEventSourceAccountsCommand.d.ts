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
  ListPartnerEventSourceAccountsRequest,
  ListPartnerEventSourceAccountsResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListPartnerEventSourceAccountsCommandInput
  extends ListPartnerEventSourceAccountsRequest {}
export interface ListPartnerEventSourceAccountsCommandOutput
  extends ListPartnerEventSourceAccountsResponse,
    __MetadataBearer {}
export declare class ListPartnerEventSourceAccountsCommand extends $Command<
  ListPartnerEventSourceAccountsCommandInput,
  ListPartnerEventSourceAccountsCommandOutput,
  EventBridgeClientResolvedConfig
> {
  readonly input: ListPartnerEventSourceAccountsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListPartnerEventSourceAccountsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListPartnerEventSourceAccountsCommandInput,
    ListPartnerEventSourceAccountsCommandOutput
  >;
  private serialize;
  private deserialize;
}
