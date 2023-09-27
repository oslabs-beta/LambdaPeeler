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
import {
  TransactGetItemsInput,
  TransactGetItemsOutput,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface TransactGetItemsCommandInput extends TransactGetItemsInput {}
export interface TransactGetItemsCommandOutput
  extends TransactGetItemsOutput,
    __MetadataBearer {}
export declare class TransactGetItemsCommand extends $Command<
  TransactGetItemsCommandInput,
  TransactGetItemsCommandOutput,
  DynamoDBClientResolvedConfig
> {
  readonly input: TransactGetItemsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: TransactGetItemsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TransactGetItemsCommandInput, TransactGetItemsCommandOutput>;
  private serialize;
  private deserialize;
}
