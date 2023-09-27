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
import { ListRulesRequest, ListRulesResponse } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListRulesCommandInput extends ListRulesRequest {}
export interface ListRulesCommandOutput
  extends ListRulesResponse,
    __MetadataBearer {}
export declare class ListRulesCommand extends $Command<
  ListRulesCommandInput,
  ListRulesCommandOutput,
  EventBridgeClientResolvedConfig
> {
  readonly input: ListRulesCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListRulesCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRulesCommandInput, ListRulesCommandOutput>;
  private serialize;
  private deserialize;
}
