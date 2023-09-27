import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { DescribeReplayRequest, DescribeReplayResponse } from "../models/models_0";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeReplayCommand}.
 */
export interface DescribeReplayCommandInput extends DescribeReplayRequest {
}
/**
 * @public
 *
 * The output of {@link DescribeReplayCommand}.
 */
export interface DescribeReplayCommandOutput extends DescribeReplayResponse, __MetadataBearer {
}
/**
 * @public
 * <p>Retrieves details about a replay. Use <code>DescribeReplay</code> to determine the
 *       progress of a running replay. A replay processes events to replay based on the time in the
 *       event, and replays them using 1 minute intervals. If you use <code>StartReplay</code> and
 *       specify an <code>EventStartTime</code> and an <code>EventEndTime</code> that covers a 20
 *       minute time range, the events are replayed from the first minute of that 20 minute range
 *       first. Then the events from the second minute are replayed. You can use
 *         <code>DescribeReplay</code> to determine the progress of a replay. The value returned for
 *         <code>EventLastReplayedTime</code> indicates the time within the specified time range
 *       associated with the last event replayed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, DescribeReplayCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, DescribeReplayCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const input = { // DescribeReplayRequest
 *   ReplayName: "STRING_VALUE", // required
 * };
 * const command = new DescribeReplayCommand(input);
 * const response = await client.send(command);
 * // { // DescribeReplayResponse
 * //   ReplayName: "STRING_VALUE",
 * //   ReplayArn: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   State: "STARTING" || "RUNNING" || "CANCELLING" || "COMPLETED" || "CANCELLED" || "FAILED",
 * //   StateReason: "STRING_VALUE",
 * //   EventSourceArn: "STRING_VALUE",
 * //   Destination: { // ReplayDestination
 * //     Arn: "STRING_VALUE", // required
 * //     FilterArns: [ // ReplayDestinationFilters
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   EventStartTime: new Date("TIMESTAMP"),
 * //   EventEndTime: new Date("TIMESTAMP"),
 * //   EventLastReplayedTime: new Date("TIMESTAMP"),
 * //   ReplayStartTime: new Date("TIMESTAMP"),
 * //   ReplayEndTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeReplayCommandInput - {@link DescribeReplayCommandInput}
 * @returns {@link DescribeReplayCommandOutput}
 * @see {@link DescribeReplayCommandInput} for command's `input` shape.
 * @see {@link DescribeReplayCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link EventBridgeServiceException}
 * <p>Base exception class for all service exceptions from EventBridge service.</p>
 *
 */
export declare class DescribeReplayCommand extends $Command<DescribeReplayCommandInput, DescribeReplayCommandOutput, EventBridgeClientResolvedConfig> {
    readonly input: DescribeReplayCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: DescribeReplayCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EventBridgeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeReplayCommandInput, DescribeReplayCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
