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
  UpdateTableReplicaAutoScalingInput,
  UpdateTableReplicaAutoScalingOutput,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface UpdateTableReplicaAutoScalingCommandInput
  extends UpdateTableReplicaAutoScalingInput {}
export interface UpdateTableReplicaAutoScalingCommandOutput
  extends UpdateTableReplicaAutoScalingOutput,
    __MetadataBearer {}
export declare class UpdateTableReplicaAutoScalingCommand extends $Command<
  UpdateTableReplicaAutoScalingCommandInput,
  UpdateTableReplicaAutoScalingCommandOutput,
  DynamoDBClientResolvedConfig
> {
  readonly input: UpdateTableReplicaAutoScalingCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: UpdateTableReplicaAutoScalingCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateTableReplicaAutoScalingCommandInput,
    UpdateTableReplicaAutoScalingCommandOutput
  >;
  private serialize;
  private deserialize;
}
