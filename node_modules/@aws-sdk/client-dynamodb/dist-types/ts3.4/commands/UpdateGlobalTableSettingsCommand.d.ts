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
  UpdateGlobalTableSettingsInput,
  UpdateGlobalTableSettingsOutput,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface UpdateGlobalTableSettingsCommandInput
  extends UpdateGlobalTableSettingsInput {}
export interface UpdateGlobalTableSettingsCommandOutput
  extends UpdateGlobalTableSettingsOutput,
    __MetadataBearer {}
export declare class UpdateGlobalTableSettingsCommand extends $Command<
  UpdateGlobalTableSettingsCommandInput,
  UpdateGlobalTableSettingsCommandOutput,
  DynamoDBClientResolvedConfig
> {
  readonly input: UpdateGlobalTableSettingsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: UpdateGlobalTableSettingsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateGlobalTableSettingsCommandInput,
    UpdateGlobalTableSettingsCommandOutput
  >;
  private serialize;
  private deserialize;
}
