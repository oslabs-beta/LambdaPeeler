"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListExports = void 0;
const ListExportsCommand_1 = require("../commands/ListExportsCommand");
const DynamoDBClient_1 = require("../DynamoDBClient");
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ListExportsCommand_1.ListExportsCommand(input), ...args);
};
async function* paginateListExports(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof DynamoDBClient_1.DynamoDBClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected DynamoDB | DynamoDBClient");
        }
        yield page;
        const prevToken = token;
        token = page.NextToken;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return undefined;
}
exports.paginateListExports = paginateListExports;
