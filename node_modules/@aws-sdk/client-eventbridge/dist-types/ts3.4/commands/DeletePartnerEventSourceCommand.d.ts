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
import { DeletePartnerEventSourceRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DeletePartnerEventSourceCommandInput
  extends DeletePartnerEventSourceRequest {}
export interface DeletePartnerEventSourceCommandOutput
  extends __MetadataBearer {}
export declare class DeletePartnerEventSourceCommand extends $Command<
  DeletePartnerEventSourceCommandInput,
  DeletePartnerEventSourceCommandOutput,
  EventBridgeClientResolvedConfig
> {
  readonly input: DeletePartnerEventSourceCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeletePartnerEventSourceCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeletePartnerEventSourceCommandInput,
    DeletePartnerEventSourceCommandOutput
  >;
  private serialize;
  private deserialize;
}
