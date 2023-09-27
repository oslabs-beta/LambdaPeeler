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
import { ListTablesInput, ListTablesOutput } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListTablesCommandInput extends ListTablesInput {}
export interface ListTablesCommandOutput
  extends ListTablesOutput,
    __MetadataBearer {}
export declare class ListTablesCommand extends $Command<
  ListTablesCommandInput,
  ListTablesCommandOutput,
  DynamoDBClientResolvedConfig
> {
  readonly input: ListTablesCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListTablesCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTablesCommandInput, ListTablesCommandOutput>;
  private serialize;
  private deserialize;
}
