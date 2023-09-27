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
import { DeleteItemInput, DeleteItemOutput } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DeleteItemCommandInput extends DeleteItemInput {}
export interface DeleteItemCommandOutput
  extends DeleteItemOutput,
    __MetadataBearer {}
export declare class DeleteItemCommand extends $Command<
  DeleteItemCommandInput,
  DeleteItemCommandOutput,
  DynamoDBClientResolvedConfig
> {
  readonly input: DeleteItemCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteItemCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteItemCommandInput, DeleteItemCommandOutput>;
  private serialize;
  private deserialize;
}
