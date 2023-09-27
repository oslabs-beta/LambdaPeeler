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
import { ScanInput, ScanOutput } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ScanCommandInput extends ScanInput {}
export interface ScanCommandOutput extends ScanOutput, __MetadataBearer {}
export declare class ScanCommand extends $Command<
  ScanCommandInput,
  ScanCommandOutput,
  DynamoDBClientResolvedConfig
> {
  readonly input: ScanCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ScanCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ScanCommandInput, ScanCommandOutput>;
  private serialize;
  private deserialize;
}
