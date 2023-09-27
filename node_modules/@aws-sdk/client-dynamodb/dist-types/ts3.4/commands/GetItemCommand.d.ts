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
import { GetItemInput, GetItemOutput } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GetItemCommandInput extends GetItemInput {}
export interface GetItemCommandOutput extends GetItemOutput, __MetadataBearer {}
export declare class GetItemCommand extends $Command<
  GetItemCommandInput,
  GetItemCommandOutput,
  DynamoDBClientResolvedConfig
> {
  readonly input: GetItemCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetItemCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetItemCommandInput, GetItemCommandOutput>;
  private serialize;
  private deserialize;
}
