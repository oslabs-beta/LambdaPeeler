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
  ListTargetsByRuleRequest,
  ListTargetsByRuleResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListTargetsByRuleCommandInput
  extends ListTargetsByRuleRequest {}
export interface ListTargetsByRuleCommandOutput
  extends ListTargetsByRuleResponse,
    __MetadataBearer {}
export declare class ListTargetsByRuleCommand extends $Command<
  ListTargetsByRuleCommandInput,
  ListTargetsByRuleCommandOutput,
  EventBridgeClientResolvedConfig
> {
  readonly input: ListTargetsByRuleCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListTargetsByRuleCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTargetsByRuleCommandInput, ListTargetsByRuleCommandOutput>;
  private serialize;
  private deserialize;
}
