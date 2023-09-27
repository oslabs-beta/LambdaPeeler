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
  RestoreTableToPointInTimeInput,
  RestoreTableToPointInTimeOutput,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface RestoreTableToPointInTimeCommandInput
  extends RestoreTableToPointInTimeInput {}
export interface RestoreTableToPointInTimeCommandOutput
  extends RestoreTableToPointInTimeOutput,
    __MetadataBearer {}
export declare class RestoreTableToPointInTimeCommand extends $Command<
  RestoreTableToPointInTimeCommandInput,
  RestoreTableToPointInTimeCommandOutput,
  DynamoDBClientResolvedConfig
> {
  readonly input: RestoreTableToPointInTimeCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: RestoreTableToPointInTimeCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    RestoreTableToPointInTimeCommandInput,
    RestoreTableToPointInTimeCommandOutput
  >;
  private serialize;
  private deserialize;
}
