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
  ListTagsOfResourceInput,
  ListTagsOfResourceOutput,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListTagsOfResourceCommandInput
  extends ListTagsOfResourceInput {}
export interface ListTagsOfResourceCommandOutput
  extends ListTagsOfResourceOutput,
    __MetadataBearer {}
export declare class ListTagsOfResourceCommand extends $Command<
  ListTagsOfResourceCommandInput,
  ListTagsOfResourceCommandOutput,
  DynamoDBClientResolvedConfig
> {
  readonly input: ListTagsOfResourceCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListTagsOfResourceCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTagsOfResourceCommandInput, ListTagsOfResourceCommandOutput>;
  private serialize;
  private deserialize;
}
