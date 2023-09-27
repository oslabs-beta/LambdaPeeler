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
  ExportTableToPointInTimeInput,
  ExportTableToPointInTimeOutput,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ExportTableToPointInTimeCommandInput
  extends ExportTableToPointInTimeInput {}
export interface ExportTableToPointInTimeCommandOutput
  extends ExportTableToPointInTimeOutput,
    __MetadataBearer {}
export declare class ExportTableToPointInTimeCommand extends $Command<
  ExportTableToPointInTimeCommandInput,
  ExportTableToPointInTimeCommandOutput,
  DynamoDBClientResolvedConfig
> {
  readonly input: ExportTableToPointInTimeCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ExportTableToPointInTimeCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ExportTableToPointInTimeCommandInput,
    ExportTableToPointInTimeCommandOutput
  >;
  private serialize;
  private deserialize;
}
