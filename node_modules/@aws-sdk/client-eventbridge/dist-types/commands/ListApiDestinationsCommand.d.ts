import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { ListApiDestinationsRequest, ListApiDestinationsResponse } from "../models/models_0";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListApiDestinationsCommand}.
 */
export interface ListApiDestinationsCommandInput extends ListApiDestinationsRequest {
}
/**
 * @public
 *
 * The output of {@link ListApiDestinationsCommand}.
 */
export interface ListApiDestinationsCommandOutput extends ListApiDestinationsResponse, __MetadataBearer {
}
/**
 * @public
 * <p>Retrieves a list of API destination in the account in the current Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, ListApiDestinationsCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, ListApiDestinationsCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const input = { // ListApiDestinationsRequest
 *   NamePrefix: "STRING_VALUE",
 *   ConnectionArn: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListApiDestinationsCommand(input);
 * const response = await client.send(command);
 * // { // ListApiDestinationsResponse
 * //   ApiDestinations: [ // ApiDestinationResponseList
 * //     { // ApiDestination
 * //       ApiDestinationArn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       ApiDestinationState: "ACTIVE" || "INACTIVE",
 * //       ConnectionArn: "STRING_VALUE",
 * //       InvocationEndpoint: "STRING_VALUE",
 * //       HttpMethod: "POST" || "GET" || "HEAD" || "OPTIONS" || "PUT" || "PATCH" || "DELETE",
 * //       InvocationRateLimitPerSecond: Number("int"),
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListApiDestinationsCommandInput - {@link ListApiDestinationsCommandInput}
 * @returns {@link ListApiDestinationsCommandOutput}
 * @see {@link ListApiDestinationsCommandInput} for command's `input` shape.
 * @see {@link ListApiDestinationsCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link EventBridgeServiceException}
 * <p>Base exception class for all service exceptions from EventBridge service.</p>
 *
 */
export declare class ListApiDestinationsCommand extends $Command<ListApiDestinationsCommandInput, ListApiDestinationsCommandOutput, EventBridgeClientResolvedConfig> {
    readonly input: ListApiDestinationsCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: ListApiDestinationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EventBridgeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListApiDestinationsCommandInput, ListApiDestinationsCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
