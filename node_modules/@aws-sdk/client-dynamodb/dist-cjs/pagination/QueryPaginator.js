"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateQuery = void 0;
const QueryCommand_1 = require("../commands/QueryCommand");
const DynamoDBClient_1 = require("../DynamoDBClient");
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new QueryCommand_1.QueryCommand(input), ...args);
};
async function* paginateQuery(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.ExclusiveStartKey = token;
        input["Limit"] = config.pageSize;
        if (config.client instanceof DynamoDBClient_1.DynamoDBClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected DynamoDB | DynamoDBClient");
        }
        yield page;
        const prevToken = token;
        token = page.LastEvaluatedKey;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return undefined;
}
exports.paginateQuery = paginateQuery;
