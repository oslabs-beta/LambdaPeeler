import { ScanCommand } from "../commands/ScanCommand";
import { DynamoDBClient } from "../DynamoDBClient";
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ScanCommand(input), ...args);
};
export async function* paginateScan(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.ExclusiveStartKey = token;
        input["Limit"] = config.pageSize;
        if (config.client instanceof DynamoDBClient) {
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
