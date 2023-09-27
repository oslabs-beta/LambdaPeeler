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
  ListRuleNamesByTargetRequest,
  ListRuleNamesByTargetResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListRuleNamesByTargetCommandInput
  extends ListRuleNamesByTargetRequest {}
export interface ListRuleNamesByTargetCommandOutput
  extends ListRuleNamesByTargetResponse,
    __MetadataBearer {}
export declare class ListRuleNamesByTargetCommand extends $Command<
  ListRuleNamesByTargetCommandInput,
  ListRuleNamesByTargetCommandOutput,
  EventBridgeClientResolvedConfig
> {
  readonly input: ListRuleNamesByTargetCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListRuleNamesByTargetCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListRuleNamesByTargetCommandInput,
    ListRuleNamesByTargetCommandOutput
  >;
  private serialize;
  private deserialize;
}
