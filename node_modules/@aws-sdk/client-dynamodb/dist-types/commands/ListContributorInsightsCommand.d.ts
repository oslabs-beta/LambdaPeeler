import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { ListContributorInsightsInput, ListContributorInsightsOutput } from "../models/models_0";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListContributorInsightsCommand}.
 */
export interface ListContributorInsightsCommandInput extends ListContributorInsightsInput {
}
/**
 * @public
 *
 * The output of {@link ListContributorInsightsCommand}.
 */
export interface ListContributorInsightsCommandOutput extends ListContributorInsightsOutput, __MetadataBearer {
}
/**
 * @public
 * <p>Returns a list of ContributorInsightsSummary for a table and all its global secondary
 *             indexes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ListContributorInsightsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ListContributorInsightsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const input = { // ListContributorInsightsInput
 *   TableName: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListContributorInsightsCommand(input);
 * const response = await client.send(command);
 * // { // ListContributorInsightsOutput
 * //   ContributorInsightsSummaries: [ // ContributorInsightsSummaries
 * //     { // ContributorInsightsSummary
 * //       TableName: "STRING_VALUE",
 * //       IndexName: "STRING_VALUE",
 * //       ContributorInsightsStatus: "ENABLING" || "ENABLED" || "DISABLING" || "DISABLED" || "FAILED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListContributorInsightsCommandInput - {@link ListContributorInsightsCommandInput}
 * @returns {@link ListContributorInsightsCommandOutput}
 * @see {@link ListContributorInsightsCommandInput} for command's `input` shape.
 * @see {@link ListContributorInsightsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a nonexistent table or index. The resource might not
 *             be specified correctly, or its status might not be <code>ACTIVE</code>.</p>
 *
 * @throws {@link DynamoDBServiceException}
 * <p>Base exception class for all service exceptions from DynamoDB service.</p>
 *
 */
export declare class ListContributorInsightsCommand extends $Command<ListContributorInsightsCommandInput, ListContributorInsightsCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: ListContributorInsightsCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: ListContributorInsightsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListContributorInsightsCommandInput, ListContributorInsightsCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
