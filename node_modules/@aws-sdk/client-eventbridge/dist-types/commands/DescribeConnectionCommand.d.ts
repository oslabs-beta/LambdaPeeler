import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { DescribeConnectionRequest, DescribeConnectionResponse } from "../models/models_0";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeConnectionCommand}.
 */
export interface DescribeConnectionCommandInput extends DescribeConnectionRequest {
}
/**
 * @public
 *
 * The output of {@link DescribeConnectionCommand}.
 */
export interface DescribeConnectionCommandOutput extends DescribeConnectionResponse, __MetadataBearer {
}
/**
 * @public
 * <p>Retrieves details about a connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, DescribeConnectionCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, DescribeConnectionCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const input = { // DescribeConnectionRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DescribeConnectionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConnectionResponse
 * //   ConnectionArn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   ConnectionState: "CREATING" || "UPDATING" || "DELETING" || "AUTHORIZED" || "DEAUTHORIZED" || "AUTHORIZING" || "DEAUTHORIZING",
 * //   StateReason: "STRING_VALUE",
 * //   AuthorizationType: "BASIC" || "OAUTH_CLIENT_CREDENTIALS" || "API_KEY",
 * //   SecretArn: "STRING_VALUE",
 * //   AuthParameters: { // ConnectionAuthResponseParameters
 * //     BasicAuthParameters: { // ConnectionBasicAuthResponseParameters
 * //       Username: "STRING_VALUE",
 * //     },
 * //     OAuthParameters: { // ConnectionOAuthResponseParameters
 * //       ClientParameters: { // ConnectionOAuthClientResponseParameters
 * //         ClientID: "STRING_VALUE",
 * //       },
 * //       AuthorizationEndpoint: "STRING_VALUE",
 * //       HttpMethod: "GET" || "POST" || "PUT",
 * //       OAuthHttpParameters: { // ConnectionHttpParameters
 * //         HeaderParameters: [ // ConnectionHeaderParametersList
 * //           { // ConnectionHeaderParameter
 * //             Key: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //             IsValueSecret: true || false,
 * //           },
 * //         ],
 * //         QueryStringParameters: [ // ConnectionQueryStringParametersList
 * //           { // ConnectionQueryStringParameter
 * //             Key: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //             IsValueSecret: true || false,
 * //           },
 * //         ],
 * //         BodyParameters: [ // ConnectionBodyParametersList
 * //           { // ConnectionBodyParameter
 * //             Key: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //             IsValueSecret: true || false,
 * //           },
 * //         ],
 * //       },
 * //     },
 * //     ApiKeyAuthParameters: { // ConnectionApiKeyAuthResponseParameters
 * //       ApiKeyName: "STRING_VALUE",
 * //     },
 * //     InvocationHttpParameters: {
 * //       HeaderParameters: [
 * //         {
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //           IsValueSecret: true || false,
 * //         },
 * //       ],
 * //       QueryStringParameters: [
 * //         {
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //           IsValueSecret: true || false,
 * //         },
 * //       ],
 * //       BodyParameters: [
 * //         {
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //           IsValueSecret: true || false,
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   LastAuthorizedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeConnectionCommandInput - {@link DescribeConnectionCommandInput}
 * @returns {@link DescribeConnectionCommandOutput}
 * @see {@link DescribeConnectionCommandInput} for command's `input` shape.
 * @see {@link DescribeConnectionCommandOutput} for command's `response` shape.
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
export declare class DescribeConnectionCommand extends $Command<DescribeConnectionCommandInput, DescribeConnectionCommandOutput, EventBridgeClientResolvedConfig> {
    readonly input: DescribeConnectionCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: DescribeConnectionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EventBridgeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeConnectionCommandInput, DescribeConnectionCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
