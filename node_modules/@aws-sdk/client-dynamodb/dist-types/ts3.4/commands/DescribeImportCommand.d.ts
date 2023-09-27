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
import { DescribeImportInput, DescribeImportOutput } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DescribeImportCommandInput extends DescribeImportInput {}
export interface DescribeImportCommandOutput
  extends DescribeImportOutput,
    __MetadataBearer {}
export declare class DescribeImportCommand extends $Command<
  DescribeImportCommandInput,
  DescribeImportCommandOutput,
  DynamoDBClientResolvedConfig
> {
  readonly input: DescribeImportCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeImportCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeImportCommandInput, DescribeImportCommandOutput>;
  private serialize;
  private deserialize;
}
