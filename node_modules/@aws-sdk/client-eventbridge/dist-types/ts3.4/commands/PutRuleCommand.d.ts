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
import { PutRuleRequest, PutRuleResponse } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface PutRuleCommandInput extends PutRuleRequest {}
export interface PutRuleCommandOutput
  extends PutRuleResponse,
    __MetadataBearer {}
export declare class PutRuleCommand extends $Command<
  PutRuleCommandInput,
  PutRuleCommandOutput,
  EventBridgeClientResolvedConfig
> {
  readonly input: PutRuleCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: PutRuleCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutRuleCommandInput, PutRuleCommandOutput>;
  private serialize;
  private deserialize;
}
