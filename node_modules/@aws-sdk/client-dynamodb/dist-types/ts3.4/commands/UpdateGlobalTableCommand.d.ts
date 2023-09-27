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
  UpdateGlobalTableInput,
  UpdateGlobalTableOutput,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface UpdateGlobalTableCommandInput extends UpdateGlobalTableInput {}
export interface UpdateGlobalTableCommandOutput
  extends UpdateGlobalTableOutput,
    __MetadataBearer {}
export declare class UpdateGlobalTableCommand extends $Command<
  UpdateGlobalTableCommandInput,
  UpdateGlobalTableCommandOutput,
  DynamoDBClientResolvedConfig
> {
  readonly input: UpdateGlobalTableCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: UpdateGlobalTableCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateGlobalTableCommandInput, UpdateGlobalTableCommandOutput>;
  private serialize;
  private deserialize;
}
