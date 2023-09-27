import { ListTablesCommand } from "../commands/ListTablesCommand";
import { DynamoDBClient } from "../DynamoDBClient";
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ListTablesCommand(input), ...args);
};
export async function* paginateListTables(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.ExclusiveStartTableName = token;
        input["Limit"] = config.pageSize;
        if (config.client instanceof DynamoDBClient) {
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
