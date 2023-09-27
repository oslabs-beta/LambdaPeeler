import { ListImportsCommand } from "../commands/ListImportsCommand";
import { DynamoDBClient } from "../DynamoDBClient";
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ListImportsCommand(input), ...args);
};
export async function* paginateListImports(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["PageSize"] = config.pageSize;
        if (config.client instanceof DynamoDBClient) {
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
