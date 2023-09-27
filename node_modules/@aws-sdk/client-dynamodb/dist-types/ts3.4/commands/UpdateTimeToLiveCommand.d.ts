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
  UpdateTimeToLiveInput,
  UpdateTimeToLiveOutput,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface UpdateTimeToLiveCommandInput extends UpdateTimeToLiveInput {}
export interface UpdateTimeToLiveCommandOutput
  extends UpdateTimeToLiveOutput,
    __MetadataBearer {}
export declare class UpdateTimeToLiveCommand extends $Command<
  UpdateTimeToLiveCommandInput,
  UpdateTimeToLiveCommandOutput,
  DynamoDBClientResolvedConfig
> {
  readonly input: UpdateTimeToLiveCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: UpdateTimeToLiveCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateTimeToLiveCommandInput, UpdateTimeToLiveCommandOutput>;
  private serialize;
  private deserialize;
}
