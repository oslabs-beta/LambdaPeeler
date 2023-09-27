import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { ListTablesInput, ListTablesOutput } from "../models/models_0";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTablesCommand}.
 */
export interface ListTablesCommandInput extends ListTablesInput {
}
/**
 * @public
 *
 * The output of {@link ListTablesCommand}.
 */
export interface ListTablesCommandOutput extends ListTablesOutput, __MetadataBearer {
}
/**
 * @public
 * <p>Returns an array of table names associated with the current account and endpoint. The
 *             output from <code>ListTables</code> is paginated, with each page returning a maximum of
 *             100 table names.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ListTablesCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ListTablesCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const input = { // ListTablesInput
 *   ExclusiveStartTableName: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListTablesCommand(input);
 * const response = await client.send(command);
 * // { // ListTablesOutput
 * //   TableNames: [ // TableNameList
 * //     "STRING_VALUE",
 * //   ],
 * //   LastEvaluatedTableName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTablesCommandInput - {@link ListTablesCommandInput}
 * @returns {@link ListTablesCommandOutput}
 * @see {@link ListTablesCommandInput} for command's `input` shape.
 * @see {@link ListTablesCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *
 * @throws {@link DynamoDBServiceException}
 * <p>Base exception class for all service exceptions from DynamoDB service.</p>
 *
 * @example To list tables
 * ```javascript
 * // This example lists all of the tables associated with the current AWS account and endpoint.
 * const input = {};
 * const command = new ListTablesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "TableNames": [
 *     "Forum",
 *     "ProductCatalog",
 *     "Reply",
 *     "Thread"
 *   ]
 * }
 * *\/
 * // example id: to-list-tables-1475884741238
 * ```
 *
 */
export declare class ListTablesCommand extends $Command<ListTablesCommandInput, ListTablesCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: ListTablesCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: ListTablesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTablesCommandInput, ListTablesCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
