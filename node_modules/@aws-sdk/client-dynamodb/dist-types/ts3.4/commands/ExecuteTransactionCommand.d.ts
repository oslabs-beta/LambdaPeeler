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
  ExecuteTransactionInput,
  ExecuteTransactionOutput,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ExecuteTransactionCommandInput
  extends ExecuteTransactionInput {}
export interface ExecuteTransactionCommandOutput
  extends ExecuteTransactionOutput,
    __MetadataBearer {}
export declare class ExecuteTransactionCommand extends $Command<
  ExecuteTransactionCommandInput,
  ExecuteTransactionCommandOutput,
  DynamoDBClientResolvedConfig
> {
  readonly input: ExecuteTransactionCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ExecuteTransactionCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExecuteTransactionCommandInput, ExecuteTransactionCommandOutput>;
  private serialize;
  private deserialize;
}
