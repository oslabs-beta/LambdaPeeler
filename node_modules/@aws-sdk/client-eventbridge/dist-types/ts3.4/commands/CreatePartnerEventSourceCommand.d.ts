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
  CreatePartnerEventSourceRequest,
  CreatePartnerEventSourceResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface CreatePartnerEventSourceCommandInput
  extends CreatePartnerEventSourceRequest {}
export interface CreatePartnerEventSourceCommandOutput
  extends CreatePartnerEventSourceResponse,
    __MetadataBearer {}
export declare class CreatePartnerEventSourceCommand extends $Command<
  CreatePartnerEventSourceCommandInput,
  CreatePartnerEventSourceCommandOutput,
  EventBridgeClientResolvedConfig
> {
  readonly input: CreatePartnerEventSourceCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CreatePartnerEventSourceCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreatePartnerEventSourceCommandInput,
    CreatePartnerEventSourceCommandOutput
  >;
  private serialize;
  private deserialize;
}
