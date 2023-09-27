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
  BatchExecuteStatementInput,
  BatchExecuteStatementOutput,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface BatchExecuteStatementCommandInput
  extends BatchExecuteStatementInput {}
export interface BatchExecuteStatementCommandOutput
  extends BatchExecuteStatementOutput,
    __MetadataBearer {}
export declare class BatchExecuteStatementCommand extends $Command<
  BatchExecuteStatementCommandInput,
  BatchExecuteStatementCommandOutput,
  DynamoDBClientResolvedConfig
> {
  readonly input: BatchExecuteStatementCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: BatchExecuteStatementCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    BatchExecuteStatementCommandInput,
    BatchExecuteStatementCommandOutput
  >;
  private serialize;
  private deserialize;
}
