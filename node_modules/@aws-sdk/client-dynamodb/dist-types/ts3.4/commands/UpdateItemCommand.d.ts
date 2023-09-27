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
import { UpdateItemInput, UpdateItemOutput } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface UpdateItemCommandInput extends UpdateItemInput {}
export interface UpdateItemCommandOutput
  extends UpdateItemOutput,
    __MetadataBearer {}
export declare class UpdateItemCommand extends $Command<
  UpdateItemCommandInput,
  UpdateItemCommandOutput,
  DynamoDBClientResolvedConfig
> {
  readonly input: UpdateItemCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: UpdateItemCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateItemCommandInput, UpdateItemCommandOutput>;
  private serialize;
  private deserialize;
}
