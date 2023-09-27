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
import { ImportTableInput, ImportTableOutput } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ImportTableCommandInput extends ImportTableInput {}
export interface ImportTableCommandOutput
  extends ImportTableOutput,
    __MetadataBearer {}
export declare class ImportTableCommand extends $Command<
  ImportTableCommandInput,
  ImportTableCommandOutput,
  DynamoDBClientResolvedConfig
> {
  readonly input: ImportTableCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ImportTableCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportTableCommandInput, ImportTableCommandOutput>;
  private serialize;
  private deserialize;
}
