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
  ExecuteStatementInput,
  ExecuteStatementOutput,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ExecuteStatementCommandInput extends ExecuteStatementInput {}
export interface ExecuteStatementCommandOutput
  extends ExecuteStatementOutput,
    __MetadataBearer {}
export declare class ExecuteStatementCommand extends $Command<
  ExecuteStatementCommandInput,
  ExecuteStatementCommandOutput,
  DynamoDBClientResolvedConfig
> {
  readonly input: ExecuteStatementCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ExecuteStatementCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExecuteStatementCommandInput, ExecuteStatementCommandOutput>;
  private serialize;
  private deserialize;
}
