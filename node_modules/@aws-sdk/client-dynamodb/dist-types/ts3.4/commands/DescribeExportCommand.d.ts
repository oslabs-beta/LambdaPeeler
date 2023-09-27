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
import { DescribeExportInput, DescribeExportOutput } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DescribeExportCommandInput extends DescribeExportInput {}
export interface DescribeExportCommandOutput
  extends DescribeExportOutput,
    __MetadataBearer {}
export declare class DescribeExportCommand extends $Command<
  DescribeExportCommandInput,
  DescribeExportCommandOutput,
  DynamoDBClientResolvedConfig
> {
  readonly input: DescribeExportCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeExportCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeExportCommandInput, DescribeExportCommandOutput>;
  private serialize;
  private deserialize;
}
