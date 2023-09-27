import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DynamoDBClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DynamoDBClient";
import { ListExportsInput, ListExportsOutput } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListExportsCommandInput extends ListExportsInput {}
export interface ListExportsCommandOutput
  extends ListExportsOutput,
    __MetadataBearer {}
export declare class ListExportsCommand extends $Command<
  ListExportsCommandInput,
  ListExportsCommandOutput,
  DynamoDBClientResolvedConfig
> {
  readonly input: ListExportsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListExportsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListExportsCommandInput, ListExportsCommandOutput>;
  private serialize;
  private deserialize;
}
