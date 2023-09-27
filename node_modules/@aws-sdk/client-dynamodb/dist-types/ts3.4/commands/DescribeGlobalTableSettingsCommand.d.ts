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
  DescribeGlobalTableSettingsInput,
  DescribeGlobalTableSettingsOutput,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DescribeGlobalTableSettingsCommandInput
  extends DescribeGlobalTableSettingsInput {}
export interface DescribeGlobalTableSettingsCommandOutput
  extends DescribeGlobalTableSettingsOutput,
    __MetadataBearer {}
export declare class DescribeGlobalTableSettingsCommand extends $Command<
  DescribeGlobalTableSettingsCommandInput,
  DescribeGlobalTableSettingsCommandOutput,
  DynamoDBClientResolvedConfig
> {
  readonly input: DescribeGlobalTableSettingsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeGlobalTableSettingsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeGlobalTableSettingsCommandInput,
    DescribeGlobalTableSettingsCommandOutput
  >;
  private serialize;
  private deserialize;
}
