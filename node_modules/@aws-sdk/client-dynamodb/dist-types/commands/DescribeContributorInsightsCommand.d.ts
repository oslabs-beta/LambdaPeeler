import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { DescribeContributorInsightsInput, DescribeContributorInsightsOutput } from "../models/models_0";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeContributorInsightsCommand}.
 */
export interface DescribeContributorInsightsCommandInput extends DescribeContributorInsightsInput {
}
/**
 * @public
 *
 * The output of {@link DescribeContributorInsightsCommand}.
 */
export interface DescribeContributorInsightsCommandOutput extends DescribeContributorInsightsOutput, __MetadataBearer {
}
/**
 * @public
 * <p>Returns information about contributor insights for a given table or global secondary
 *             index.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DescribeContributorInsightsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DescribeContributorInsightsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const input = { // DescribeContributorInsightsInput
 *   TableName: "STRING_VALUE", // required
 *   IndexName: "STRING_VALUE",
 * };
 * const command = new DescribeContributorInsightsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeContributorInsightsOutput
 * //   TableName: "STRING_VALUE",
 * //   IndexName: "STRING_VALUE",
 * //   ContributorInsightsRuleList: [ // ContributorInsightsRuleList
 * //     "STRING_VALUE",
 * //   ],
 * //   ContributorInsightsStatus: "ENABLING" || "ENABLED" || "DISABLING" || "DISABLED" || "FAILED",
 * //   LastUpdateDateTime: new Date("TIMESTAMP"),
 * //   FailureException: { // FailureException
 * //     ExceptionName: "STRING_VALUE",
 * //     ExceptionDescription: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeContributorInsightsCommandInput - {@link DescribeContributorInsightsCommandInput}
 * @returns {@link DescribeContributorInsightsCommandOutput}
 * @see {@link DescribeContributorInsightsCommandInput} for command's `input` shape.
 * @see {@link DescribeContributorInsightsCommandOutput} for command's `response` shape.
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
export declare class DescribeContributorInsightsCommand extends $Command<DescribeContributorInsightsCommandInput, DescribeContributorInsightsCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: DescribeContributorInsightsCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: DescribeContributorInsightsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeContributorInsightsCommandInput, DescribeContributorInsightsCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
