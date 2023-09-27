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
import { CancelReplayRequest, CancelReplayResponse } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface CancelReplayCommandInput extends CancelReplayRequest {}
export interface CancelReplayCommandOutput
  extends CancelReplayResponse,
    __MetadataBearer {}
export declare class CancelReplayCommand extends $Command<
  CancelReplayCommandInput,
  CancelReplayCommandOutput,
  EventBridgeClientResolvedConfig
> {
  readonly input: CancelReplayCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CancelReplayCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelReplayCommandInput, CancelReplayCommandOutput>;
  private serialize;
  private deserialize;
}
