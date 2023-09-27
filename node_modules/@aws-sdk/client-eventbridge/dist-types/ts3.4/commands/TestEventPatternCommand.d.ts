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
  TestEventPatternRequest,
  TestEventPatternResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface TestEventPatternCommandInput extends TestEventPatternRequest {}
export interface TestEventPatternCommandOutput
  extends TestEventPatternResponse,
    __MetadataBearer {}
export declare class TestEventPatternCommand extends $Command<
  TestEventPatternCommandInput,
  TestEventPatternCommandOutput,
  EventBridgeClientResolvedConfig
> {
  readonly input: TestEventPatternCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: TestEventPatternCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TestEventPatternCommandInput, TestEventPatternCommandOutput>;
  private serialize;
  private deserialize;
}
