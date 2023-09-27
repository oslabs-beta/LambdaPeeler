import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { PutPartnerEventsRequest, PutPartnerEventsResponse } from "../models/models_0";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutPartnerEventsCommand}.
 */
export interface PutPartnerEventsCommandInput extends PutPartnerEventsRequest {
}
/**
 * @public
 *
 * The output of {@link PutPartnerEventsCommand}.
 */
export interface PutPartnerEventsCommandOutput extends PutPartnerEventsResponse, __MetadataBearer {
}
/**
 * @public
 * <p>This is used by SaaS partners to write events to a customer's partner event bus. Amazon Web Services
 *       customers do not use this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, PutPartnerEventsCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, PutPartnerEventsCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const input = { // PutPartnerEventsRequest
 *   Entries: [ // PutPartnerEventsRequestEntryList // required
 *     { // PutPartnerEventsRequestEntry
 *       Time: new Date("TIMESTAMP"),
 *       Source: "STRING_VALUE",
 *       Resources: [ // EventResourceList
 *         "STRING_VALUE",
 *       ],
 *       DetailType: "STRING_VALUE",
 *       Detail: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new PutPartnerEventsCommand(input);
 * const response = await client.send(command);
 * // { // PutPartnerEventsResponse
 * //   FailedEntryCount: Number("int"),
 * //   Entries: [ // PutPartnerEventsResultEntryList
 * //     { // PutPartnerEventsResultEntry
 * //       EventId: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutPartnerEventsCommandInput - {@link PutPartnerEventsCommandInput}
 * @returns {@link PutPartnerEventsCommandOutput}
 * @see {@link PutPartnerEventsCommandInput} for command's `input` shape.
 * @see {@link PutPartnerEventsCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link OperationDisabledException} (client fault)
 *  <p>The operation you are attempting is not available in this region.</p>
 *
 * @throws {@link EventBridgeServiceException}
 * <p>Base exception class for all service exceptions from EventBridge service.</p>
 *
 */
export declare class PutPartnerEventsCommand extends $Command<PutPartnerEventsCommandInput, PutPartnerEventsCommandOutput, EventBridgeClientResolvedConfig> {
    readonly input: PutPartnerEventsCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: PutPartnerEventsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EventBridgeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutPartnerEventsCommandInput, PutPartnerEventsCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
