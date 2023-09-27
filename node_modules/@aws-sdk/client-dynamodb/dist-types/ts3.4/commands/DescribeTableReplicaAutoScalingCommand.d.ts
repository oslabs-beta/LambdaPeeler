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
  DescribeTableReplicaAutoScalingInput,
  DescribeTableReplicaAutoScalingOutput,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DescribeTableReplicaAutoScalingCommandInput
  extends DescribeTableReplicaAutoScalingInput {}
export interface DescribeTableReplicaAutoScalingCommandOutput
  extends DescribeTableReplicaAutoScalingOutput,
    __MetadataBearer {}
export declare class DescribeTableReplicaAutoScalingCommand extends $Command<
  DescribeTableReplicaAutoScalingCommandInput,
  DescribeTableReplicaAutoScalingCommandOutput,
  DynamoDBClientResolvedConfig
> {
  readonly input: DescribeTableReplicaAutoScalingCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeTableReplicaAutoScalingCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeTableReplicaAutoScalingCommandInput,
    DescribeTableReplicaAutoScalingCommandOutput
  >;
  private serialize;
  private deserialize;
}
