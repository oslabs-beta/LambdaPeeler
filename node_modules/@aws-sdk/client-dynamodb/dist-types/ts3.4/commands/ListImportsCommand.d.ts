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
import { ListImportsInput, ListImportsOutput } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListImportsCommandInput extends ListImportsInput {}
export interface ListImportsCommandOutput
  extends ListImportsOutput,
    __MetadataBearer {}
export declare class ListImportsCommand extends $Command<
  ListImportsCommandInput,
  ListImportsCommandOutput,
  DynamoDBClientResolvedConfig
> {
  readonly input: ListImportsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListImportsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListImportsCommandInput, ListImportsCommandOutput>;
  private serialize;
  private deserialize;
}
