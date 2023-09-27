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
  DescribeContinuousBackupsInput,
  DescribeContinuousBackupsOutput,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DescribeContinuousBackupsCommandInput
  extends DescribeContinuousBackupsInput {}
export interface DescribeContinuousBackupsCommandOutput
  extends DescribeContinuousBackupsOutput,
    __MetadataBearer {}
export declare class DescribeContinuousBackupsCommand extends $Command<
  DescribeContinuousBackupsCommandInput,
  DescribeContinuousBackupsCommandOutput,
  DynamoDBClientResolvedConfig
> {
  readonly input: DescribeContinuousBackupsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeContinuousBackupsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeContinuousBackupsCommandInput,
    DescribeContinuousBackupsCommandOutput
  >;
  private serialize;
  private deserialize;
}
