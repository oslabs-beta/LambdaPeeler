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
import { CreateTableInput, CreateTableOutput } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface CreateTableCommandInput extends CreateTableInput {}
export interface CreateTableCommandOutput
  extends CreateTableOutput,
    __MetadataBearer {}
export declare class CreateTableCommand extends $Command<
  CreateTableCommandInput,
  CreateTableCommandOutput,
  DynamoDBClientResolvedConfig
> {
  readonly input: CreateTableCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CreateTableCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateTableCommandInput, CreateTableCommandOutput>;
  private serialize;
  private deserialize;
}
