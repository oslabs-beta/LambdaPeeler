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
import { ListArchivesRequest, ListArchivesResponse } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListArchivesCommandInput extends ListArchivesRequest {}
export interface ListArchivesCommandOutput
  extends ListArchivesResponse,
    __MetadataBearer {}
export declare class ListArchivesCommand extends $Command<
  ListArchivesCommandInput,
  ListArchivesCommandOutput,
  EventBridgeClientResolvedConfig
> {
  readonly input: ListArchivesCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListArchivesCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListArchivesCommandInput, ListArchivesCommandOutput>;
  private serialize;
  private deserialize;
}
