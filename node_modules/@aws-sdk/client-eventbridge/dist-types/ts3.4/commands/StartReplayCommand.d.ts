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
import { StartReplayRequest, StartReplayResponse } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface StartReplayCommandInput extends StartReplayRequest {}
export interface StartReplayCommandOutput
  extends StartReplayResponse,
    __MetadataBearer {}
export declare class StartReplayCommand extends $Command<
  StartReplayCommandInput,
  StartReplayCommandOutput,
  EventBridgeClientResolvedConfig
> {
  readonly input: StartReplayCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: StartReplayCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartReplayCommandInput, StartReplayCommandOutput>;
  private serialize;
  private deserialize;
}
