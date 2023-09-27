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
import { PutItemInput, PutItemOutput } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface PutItemCommandInput extends PutItemInput {}
export interface PutItemCommandOutput extends PutItemOutput, __MetadataBearer {}
export declare class PutItemCommand extends $Command<
  PutItemCommandInput,
  PutItemCommandOutput,
  DynamoDBClientResolvedConfig
> {
  readonly input: PutItemCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: PutItemCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutItemCommandInput, PutItemCommandOutput>;
  private serialize;
  private deserialize;
}
