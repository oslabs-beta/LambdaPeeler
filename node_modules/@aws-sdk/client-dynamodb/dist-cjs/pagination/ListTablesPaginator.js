"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListTables = void 0;
const ListTablesCommand_1 = require("../commands/ListTablesCommand");
const DynamoDBClient_1 = require("../DynamoDBClient");
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ListTablesCommand_1.ListTablesCommand(input), ...args);
};
async function* paginateListTables(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.ExclusiveStartTableName = token;
        input["Limit"] = config.pageSize;
        if (config.client instanceof DynamoDBClient_1.DynamoDBClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected DynamoDB | DynamoDBClient");
        }
        yield page;
        const prevToken = token;
        token = page.LastEvaluatedTableName;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return undefined;
}
exports.paginateListTables = paginateListTables;
