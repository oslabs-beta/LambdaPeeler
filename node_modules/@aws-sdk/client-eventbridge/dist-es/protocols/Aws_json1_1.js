import { HttpRequest as __HttpRequest } from "@smithy/protocol-http";
import { _json, collectBody, decorateServiceException as __decorateServiceException, expectInt32 as __expectInt32, expectLong as __expectLong, expectNonNull as __expectNonNull, expectNumber as __expectNumber, expectString as __expectString, parseEpochTimestamp as __parseEpochTimestamp, take, withBaseException, } from "@smithy/smithy-client";
import { EventBridgeServiceException as __BaseException } from "../models/EventBridgeServiceException";
import { ConcurrentModificationException, IllegalStatusException, InternalException, InvalidEventPatternException, InvalidStateException, LimitExceededException, ManagedRuleException, OperationDisabledException, PolicyLengthExceededException, ResourceAlreadyExistsException, ResourceNotFoundException, } from "../models/models_0";
export const se_ActivateEventSourceCommand = async (input, context) => {
    const headers = sharedHeaders("ActivateEventSource");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_CancelReplayCommand = async (input, context) => {
    const headers = sharedHeaders("CancelReplay");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_CreateApiDestinationCommand = async (input, context) => {
    const headers = sharedHeaders("CreateApiDestination");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_CreateArchiveCommand = async (input, context) => {
    const headers = sharedHeaders("CreateArchive");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_CreateConnectionCommand = async (input, context) => {
    const headers = sharedHeaders("CreateConnection");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_CreateEndpointCommand = async (input, context) => {
    const headers = sharedHeaders("CreateEndpoint");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_CreateEventBusCommand = async (input, context) => {
    const headers = sharedHeaders("CreateEventBus");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_CreatePartnerEventSourceCommand = async (input, context) => {
    const headers = sharedHeaders("CreatePartnerEventSource");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DeactivateEventSourceCommand = async (input, context) => {
    const headers = sharedHeaders("DeactivateEventSource");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DeauthorizeConnectionCommand = async (input, context) => {
    const headers = sharedHeaders("DeauthorizeConnection");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DeleteApiDestinationCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteApiDestination");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DeleteArchiveCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteArchive");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DeleteConnectionCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteConnection");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DeleteEndpointCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteEndpoint");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DeleteEventBusCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteEventBus");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DeletePartnerEventSourceCommand = async (input, context) => {
    const headers = sharedHeaders("DeletePartnerEventSource");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DeleteRuleCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteRule");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DescribeApiDestinationCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeApiDestination");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DescribeArchiveCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeArchive");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DescribeConnectionCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeConnection");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DescribeEndpointCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeEndpoint");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DescribeEventBusCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeEventBus");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DescribeEventSourceCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeEventSource");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DescribePartnerEventSourceCommand = async (input, context) => {
    const headers = sharedHeaders("DescribePartnerEventSource");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DescribeReplayCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeReplay");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DescribeRuleCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeRule");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DisableRuleCommand = async (input, context) => {
    const headers = sharedHeaders("DisableRule");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_EnableRuleCommand = async (input, context) => {
    const headers = sharedHeaders("EnableRule");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListApiDestinationsCommand = async (input, context) => {
    const headers = sharedHeaders("ListApiDestinations");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListArchivesCommand = async (input, context) => {
    const headers = sharedHeaders("ListArchives");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListConnectionsCommand = async (input, context) => {
    const headers = sharedHeaders("ListConnections");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListEndpointsCommand = async (input, context) => {
    const headers = sharedHeaders("ListEndpoints");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListEventBusesCommand = async (input, context) => {
    const headers = sharedHeaders("ListEventBuses");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListEventSourcesCommand = async (input, context) => {
    const headers = sharedHeaders("ListEventSources");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListPartnerEventSourceAccountsCommand = async (input, context) => {
    const headers = sharedHeaders("ListPartnerEventSourceAccounts");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListPartnerEventSourcesCommand = async (input, context) => {
    const headers = sharedHeaders("ListPartnerEventSources");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListReplaysCommand = async (input, context) => {
    const headers = sharedHeaders("ListReplays");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListRuleNamesByTargetCommand = async (input, context) => {
    const headers = sharedHeaders("ListRuleNamesByTarget");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListRulesCommand = async (input, context) => {
    const headers = sharedHeaders("ListRules");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListTagsForResourceCommand = async (input, context) => {
    const headers = sharedHeaders("ListTagsForResource");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListTargetsByRuleCommand = async (input, context) => {
    const headers = sharedHeaders("ListTargetsByRule");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_PutEventsCommand = async (input, context) => {
    const headers = sharedHeaders("PutEvents");
    let body;
    body = JSON.stringify(se_PutEventsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_PutPartnerEventsCommand = async (input, context) => {
    const headers = sharedHeaders("PutPartnerEvents");
    let body;
    body = JSON.stringify(se_PutPartnerEventsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_PutPermissionCommand = async (input, context) => {
    const headers = sharedHeaders("PutPermission");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_PutRuleCommand = async (input, context) => {
    const headers = sharedHeaders("PutRule");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_PutTargetsCommand = async (input, context) => {
    const headers = sharedHeaders("PutTargets");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_RemovePermissionCommand = async (input, context) => {
    const headers = sharedHeaders("RemovePermission");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_RemoveTargetsCommand = async (input, context) => {
    const headers = sharedHeaders("RemoveTargets");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_StartReplayCommand = async (input, context) => {
    const headers = sharedHeaders("StartReplay");
    let body;
    body = JSON.stringify(se_StartReplayRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_TagResourceCommand = async (input, context) => {
    const headers = sharedHeaders("TagResource");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_TestEventPatternCommand = async (input, context) => {
    const headers = sharedHeaders("TestEventPattern");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_UntagResourceCommand = async (input, context) => {
    const headers = sharedHeaders("UntagResource");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_UpdateApiDestinationCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateApiDestination");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_UpdateArchiveCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateArchive");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_UpdateConnectionCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateConnection");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_UpdateEndpointCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateEndpoint");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const de_ActivateEventSourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ActivateEventSourceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
const de_ActivateEventSourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "InvalidStateException":
        case "com.amazonaws.eventbridge#InvalidStateException":
            throw await de_InvalidStateExceptionRes(parsedOutput, context);
        case "OperationDisabledException":
        case "com.amazonaws.eventbridge#OperationDisabledException":
            throw await de_OperationDisabledExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_CancelReplayCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CancelReplayCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_CancelReplayCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
        case "IllegalStatusException":
        case "com.amazonaws.eventbridge#IllegalStatusException":
            throw await de_IllegalStatusExceptionRes(parsedOutput, context);
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_CreateApiDestinationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CreateApiDestinationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_CreateApiDestinationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_CreateApiDestinationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.eventbridge#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.eventbridge#ResourceAlreadyExistsException":
            throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_CreateArchiveCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CreateArchiveCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_CreateArchiveResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_CreateArchiveCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "InvalidEventPatternException":
        case "com.amazonaws.eventbridge#InvalidEventPatternException":
            throw await de_InvalidEventPatternExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.eventbridge#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.eventbridge#ResourceAlreadyExistsException":
            throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_CreateConnectionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CreateConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_CreateConnectionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_CreateConnectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.eventbridge#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.eventbridge#ResourceAlreadyExistsException":
            throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_CreateEndpointCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CreateEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_CreateEndpointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.eventbridge#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.eventbridge#ResourceAlreadyExistsException":
            throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_CreateEventBusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CreateEventBusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_CreateEventBusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "InvalidStateException":
        case "com.amazonaws.eventbridge#InvalidStateException":
            throw await de_InvalidStateExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.eventbridge#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "OperationDisabledException":
        case "com.amazonaws.eventbridge#OperationDisabledException":
            throw await de_OperationDisabledExceptionRes(parsedOutput, context);
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.eventbridge#ResourceAlreadyExistsException":
            throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_CreatePartnerEventSourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CreatePartnerEventSourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_CreatePartnerEventSourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.eventbridge#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "OperationDisabledException":
        case "com.amazonaws.eventbridge#OperationDisabledException":
            throw await de_OperationDisabledExceptionRes(parsedOutput, context);
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.eventbridge#ResourceAlreadyExistsException":
            throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_DeactivateEventSourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeactivateEventSourceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
const de_DeactivateEventSourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "InvalidStateException":
        case "com.amazonaws.eventbridge#InvalidStateException":
            throw await de_InvalidStateExceptionRes(parsedOutput, context);
        case "OperationDisabledException":
        case "com.amazonaws.eventbridge#OperationDisabledException":
            throw await de_OperationDisabledExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_DeauthorizeConnectionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeauthorizeConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DeauthorizeConnectionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DeauthorizeConnectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_DeleteApiDestinationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteApiDestinationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DeleteApiDestinationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_DeleteArchiveCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteArchiveCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DeleteArchiveCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_DeleteConnectionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DeleteConnectionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DeleteConnectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_DeleteEndpointCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DeleteEndpointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_DeleteEventBusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteEventBusCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
const de_DeleteEventBusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_DeletePartnerEventSourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeletePartnerEventSourceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
const de_DeletePartnerEventSourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "OperationDisabledException":
        case "com.amazonaws.eventbridge#OperationDisabledException":
            throw await de_OperationDisabledExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_DeleteRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteRuleCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
const de_DeleteRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "ManagedRuleException":
        case "com.amazonaws.eventbridge#ManagedRuleException":
            throw await de_ManagedRuleExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_DescribeApiDestinationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeApiDestinationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeApiDestinationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeApiDestinationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_DescribeArchiveCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeArchiveCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeArchiveResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeArchiveCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.eventbridge#ResourceAlreadyExistsException":
            throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_DescribeConnectionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeConnectionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeConnectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_DescribeEndpointCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeEndpointResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeEndpointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_DescribeEventBusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeEventBusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeEventBusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_DescribeEventSourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeEventSourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeEventSourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeEventSourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "OperationDisabledException":
        case "com.amazonaws.eventbridge#OperationDisabledException":
            throw await de_OperationDisabledExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_DescribePartnerEventSourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribePartnerEventSourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribePartnerEventSourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "OperationDisabledException":
        case "com.amazonaws.eventbridge#OperationDisabledException":
            throw await de_OperationDisabledExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_DescribeReplayCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeReplayCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeReplayResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeReplayCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_DescribeRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_DisableRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DisableRuleCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
const de_DisableRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "ManagedRuleException":
        case "com.amazonaws.eventbridge#ManagedRuleException":
            throw await de_ManagedRuleExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_EnableRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_EnableRuleCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
const de_EnableRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "ManagedRuleException":
        case "com.amazonaws.eventbridge#ManagedRuleException":
            throw await de_ManagedRuleExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_ListApiDestinationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListApiDestinationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListApiDestinationsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListApiDestinationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_ListArchivesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListArchivesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListArchivesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListArchivesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_ListConnectionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListConnectionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListConnectionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListConnectionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_ListEndpointsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListEndpointsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListEndpointsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListEndpointsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_ListEventBusesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListEventBusesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListEventBusesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_ListEventSourcesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListEventSourcesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListEventSourcesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListEventSourcesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "OperationDisabledException":
        case "com.amazonaws.eventbridge#OperationDisabledException":
            throw await de_OperationDisabledExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_ListPartnerEventSourceAccountsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListPartnerEventSourceAccountsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListPartnerEventSourceAccountsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListPartnerEventSourceAccountsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "OperationDisabledException":
        case "com.amazonaws.eventbridge#OperationDisabledException":
            throw await de_OperationDisabledExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_ListPartnerEventSourcesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListPartnerEventSourcesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListPartnerEventSourcesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "OperationDisabledException":
        case "com.amazonaws.eventbridge#OperationDisabledException":
            throw await de_OperationDisabledExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_ListReplaysCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListReplaysCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListReplaysResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListReplaysCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_ListRuleNamesByTargetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListRuleNamesByTargetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListRuleNamesByTargetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_ListRulesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListRulesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListRulesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListTagsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_ListTargetsByRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListTargetsByRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListTargetsByRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_PutEventsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_PutEventsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_PutEventsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_PutPartnerEventsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_PutPartnerEventsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_PutPartnerEventsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "OperationDisabledException":
        case "com.amazonaws.eventbridge#OperationDisabledException":
            throw await de_OperationDisabledExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_PutPermissionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_PutPermissionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
const de_PutPermissionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "OperationDisabledException":
        case "com.amazonaws.eventbridge#OperationDisabledException":
            throw await de_OperationDisabledExceptionRes(parsedOutput, context);
        case "PolicyLengthExceededException":
        case "com.amazonaws.eventbridge#PolicyLengthExceededException":
            throw await de_PolicyLengthExceededExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_PutRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_PutRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_PutRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "InvalidEventPatternException":
        case "com.amazonaws.eventbridge#InvalidEventPatternException":
            throw await de_InvalidEventPatternExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.eventbridge#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ManagedRuleException":
        case "com.amazonaws.eventbridge#ManagedRuleException":
            throw await de_ManagedRuleExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_PutTargetsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_PutTargetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_PutTargetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.eventbridge#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ManagedRuleException":
        case "com.amazonaws.eventbridge#ManagedRuleException":
            throw await de_ManagedRuleExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_RemovePermissionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_RemovePermissionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
const de_RemovePermissionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "OperationDisabledException":
        case "com.amazonaws.eventbridge#OperationDisabledException":
            throw await de_OperationDisabledExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_RemoveTargetsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_RemoveTargetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_RemoveTargetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "ManagedRuleException":
        case "com.amazonaws.eventbridge#ManagedRuleException":
            throw await de_ManagedRuleExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_StartReplayCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_StartReplayCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_StartReplayResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_StartReplayCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "InvalidEventPatternException":
        case "com.amazonaws.eventbridge#InvalidEventPatternException":
            throw await de_InvalidEventPatternExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.eventbridge#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.eventbridge#ResourceAlreadyExistsException":
            throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_TagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_TagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_TagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "ManagedRuleException":
        case "com.amazonaws.eventbridge#ManagedRuleException":
            throw await de_ManagedRuleExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_TestEventPatternCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_TestEventPatternCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_TestEventPatternCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "InvalidEventPatternException":
        case "com.amazonaws.eventbridge#InvalidEventPatternException":
            throw await de_InvalidEventPatternExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_UntagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UntagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_UntagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "ManagedRuleException":
        case "com.amazonaws.eventbridge#ManagedRuleException":
            throw await de_ManagedRuleExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_UpdateApiDestinationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateApiDestinationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_UpdateApiDestinationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_UpdateApiDestinationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.eventbridge#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_UpdateArchiveCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateArchiveCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_UpdateArchiveResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_UpdateArchiveCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "InvalidEventPatternException":
        case "com.amazonaws.eventbridge#InvalidEventPatternException":
            throw await de_InvalidEventPatternExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.eventbridge#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_UpdateConnectionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_UpdateConnectionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_UpdateConnectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.eventbridge#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_UpdateEndpointCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_UpdateEndpointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            throw await de_InternalExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ConcurrentModificationExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new ConcurrentModificationException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_IllegalStatusExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new IllegalStatusException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_InternalExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new InternalException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_InvalidEventPatternExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new InvalidEventPatternException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_InvalidStateExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new InvalidStateException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_LimitExceededExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new LimitExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_ManagedRuleExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new ManagedRuleException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_OperationDisabledExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new OperationDisabledException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_PolicyLengthExceededExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new PolicyLengthExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_ResourceAlreadyExistsExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new ResourceAlreadyExistsException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_ResourceNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new ResourceNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const se_PutEventsRequest = (input, context) => {
    return take(input, {
        EndpointId: [],
        Entries: (_) => se_PutEventsRequestEntryList(_, context),
    });
};
const se_PutEventsRequestEntry = (input, context) => {
    return take(input, {
        Detail: [],
        DetailType: [],
        EventBusName: [],
        Resources: _json,
        Source: [],
        Time: (_) => Math.round(_.getTime() / 1000),
        TraceHeader: [],
    });
};
const se_PutEventsRequestEntryList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return se_PutEventsRequestEntry(entry, context);
    });
};
const se_PutPartnerEventsRequest = (input, context) => {
    return take(input, {
        Entries: (_) => se_PutPartnerEventsRequestEntryList(_, context),
    });
};
const se_PutPartnerEventsRequestEntry = (input, context) => {
    return take(input, {
        Detail: [],
        DetailType: [],
        Resources: _json,
        Source: [],
        Time: (_) => Math.round(_.getTime() / 1000),
    });
};
const se_PutPartnerEventsRequestEntryList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return se_PutPartnerEventsRequestEntry(entry, context);
    });
};
const se_StartReplayRequest = (input, context) => {
    return take(input, {
        Description: [],
        Destination: _json,
        EventEndTime: (_) => Math.round(_.getTime() / 1000),
        EventSourceArn: [],
        EventStartTime: (_) => Math.round(_.getTime() / 1000),
        ReplayName: [],
    });
};
const de_ApiDestination = (output, context) => {
    return take(output, {
        ApiDestinationArn: __expectString,
        ApiDestinationState: __expectString,
        ConnectionArn: __expectString,
        CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        HttpMethod: __expectString,
        InvocationEndpoint: __expectString,
        InvocationRateLimitPerSecond: __expectInt32,
        LastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        Name: __expectString,
    });
};
const de_ApiDestinationResponseList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ApiDestination(entry, context);
    });
    return retVal;
};
const de_Archive = (output, context) => {
    return take(output, {
        ArchiveName: __expectString,
        CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        EventCount: __expectLong,
        EventSourceArn: __expectString,
        RetentionDays: __expectInt32,
        SizeBytes: __expectLong,
        State: __expectString,
        StateReason: __expectString,
    });
};
const de_ArchiveResponseList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_Archive(entry, context);
    });
    return retVal;
};
const de_Connection = (output, context) => {
    return take(output, {
        AuthorizationType: __expectString,
        ConnectionArn: __expectString,
        ConnectionState: __expectString,
        CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        LastAuthorizedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        LastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        Name: __expectString,
        StateReason: __expectString,
    });
};
const de_ConnectionResponseList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_Connection(entry, context);
    });
    return retVal;
};
const de_CreateApiDestinationResponse = (output, context) => {
    return take(output, {
        ApiDestinationArn: __expectString,
        ApiDestinationState: __expectString,
        CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        LastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    });
};
const de_CreateArchiveResponse = (output, context) => {
    return take(output, {
        ArchiveArn: __expectString,
        CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        State: __expectString,
        StateReason: __expectString,
    });
};
const de_CreateConnectionResponse = (output, context) => {
    return take(output, {
        ConnectionArn: __expectString,
        ConnectionState: __expectString,
        CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        LastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    });
};
const de_DeauthorizeConnectionResponse = (output, context) => {
    return take(output, {
        ConnectionArn: __expectString,
        ConnectionState: __expectString,
        CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        LastAuthorizedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        LastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    });
};
const de_DeleteConnectionResponse = (output, context) => {
    return take(output, {
        ConnectionArn: __expectString,
        ConnectionState: __expectString,
        CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        LastAuthorizedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        LastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    });
};
const de_DescribeApiDestinationResponse = (output, context) => {
    return take(output, {
        ApiDestinationArn: __expectString,
        ApiDestinationState: __expectString,
        ConnectionArn: __expectString,
        CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        Description: __expectString,
        HttpMethod: __expectString,
        InvocationEndpoint: __expectString,
        InvocationRateLimitPerSecond: __expectInt32,
        LastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        Name: __expectString,
    });
};
const de_DescribeArchiveResponse = (output, context) => {
    return take(output, {
        ArchiveArn: __expectString,
        ArchiveName: __expectString,
        CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        Description: __expectString,
        EventCount: __expectLong,
        EventPattern: __expectString,
        EventSourceArn: __expectString,
        RetentionDays: __expectInt32,
        SizeBytes: __expectLong,
        State: __expectString,
        StateReason: __expectString,
    });
};
const de_DescribeConnectionResponse = (output, context) => {
    return take(output, {
        AuthParameters: _json,
        AuthorizationType: __expectString,
        ConnectionArn: __expectString,
        ConnectionState: __expectString,
        CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        Description: __expectString,
        LastAuthorizedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        LastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        Name: __expectString,
        SecretArn: __expectString,
        StateReason: __expectString,
    });
};
const de_DescribeEndpointResponse = (output, context) => {
    return take(output, {
        Arn: __expectString,
        CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        Description: __expectString,
        EndpointId: __expectString,
        EndpointUrl: __expectString,
        EventBuses: _json,
        LastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        Name: __expectString,
        ReplicationConfig: _json,
        RoleArn: __expectString,
        RoutingConfig: _json,
        State: __expectString,
        StateReason: __expectString,
    });
};
const de_DescribeEventSourceResponse = (output, context) => {
    return take(output, {
        Arn: __expectString,
        CreatedBy: __expectString,
        CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        ExpirationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        Name: __expectString,
        State: __expectString,
    });
};
const de_DescribeReplayResponse = (output, context) => {
    return take(output, {
        Description: __expectString,
        Destination: _json,
        EventEndTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        EventLastReplayedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        EventSourceArn: __expectString,
        EventStartTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        ReplayArn: __expectString,
        ReplayEndTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        ReplayName: __expectString,
        ReplayStartTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        State: __expectString,
        StateReason: __expectString,
    });
};
const de_Endpoint = (output, context) => {
    return take(output, {
        Arn: __expectString,
        CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        Description: __expectString,
        EndpointId: __expectString,
        EndpointUrl: __expectString,
        EventBuses: _json,
        LastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        Name: __expectString,
        ReplicationConfig: _json,
        RoleArn: __expectString,
        RoutingConfig: _json,
        State: __expectString,
        StateReason: __expectString,
    });
};
const de_EndpointList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_Endpoint(entry, context);
    });
    return retVal;
};
const de_EventSource = (output, context) => {
    return take(output, {
        Arn: __expectString,
        CreatedBy: __expectString,
        CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        ExpirationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        Name: __expectString,
        State: __expectString,
    });
};
const de_EventSourceList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_EventSource(entry, context);
    });
    return retVal;
};
const de_ListApiDestinationsResponse = (output, context) => {
    return take(output, {
        ApiDestinations: (_) => de_ApiDestinationResponseList(_, context),
        NextToken: __expectString,
    });
};
const de_ListArchivesResponse = (output, context) => {
    return take(output, {
        Archives: (_) => de_ArchiveResponseList(_, context),
        NextToken: __expectString,
    });
};
const de_ListConnectionsResponse = (output, context) => {
    return take(output, {
        Connections: (_) => de_ConnectionResponseList(_, context),
        NextToken: __expectString,
    });
};
const de_ListEndpointsResponse = (output, context) => {
    return take(output, {
        Endpoints: (_) => de_EndpointList(_, context),
        NextToken: __expectString,
    });
};
const de_ListEventSourcesResponse = (output, context) => {
    return take(output, {
        EventSources: (_) => de_EventSourceList(_, context),
        NextToken: __expectString,
    });
};
const de_ListPartnerEventSourceAccountsResponse = (output, context) => {
    return take(output, {
        NextToken: __expectString,
        PartnerEventSourceAccounts: (_) => de_PartnerEventSourceAccountList(_, context),
    });
};
const de_ListReplaysResponse = (output, context) => {
    return take(output, {
        NextToken: __expectString,
        Replays: (_) => de_ReplayList(_, context),
    });
};
const de_PartnerEventSourceAccount = (output, context) => {
    return take(output, {
        Account: __expectString,
        CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        ExpirationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        State: __expectString,
    });
};
const de_PartnerEventSourceAccountList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_PartnerEventSourceAccount(entry, context);
    });
    return retVal;
};
const de_Replay = (output, context) => {
    return take(output, {
        EventEndTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        EventLastReplayedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        EventSourceArn: __expectString,
        EventStartTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        ReplayEndTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        ReplayName: __expectString,
        ReplayStartTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        State: __expectString,
        StateReason: __expectString,
    });
};
const de_ReplayList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_Replay(entry, context);
    });
    return retVal;
};
const de_StartReplayResponse = (output, context) => {
    return take(output, {
        ReplayArn: __expectString,
        ReplayStartTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        State: __expectString,
        StateReason: __expectString,
    });
};
const de_UpdateApiDestinationResponse = (output, context) => {
    return take(output, {
        ApiDestinationArn: __expectString,
        ApiDestinationState: __expectString,
        CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        LastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    });
};
const de_UpdateArchiveResponse = (output, context) => {
    return take(output, {
        ArchiveArn: __expectString,
        CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        State: __expectString,
        StateReason: __expectString,
    });
};
const de_UpdateConnectionResponse = (output, context) => {
    return take(output, {
        ConnectionArn: __expectString,
        ConnectionState: __expectString,
        CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        LastAuthorizedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        LastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    });
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const throwDefaultError = withBaseException(__BaseException);
const buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
        headers,
    };
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new __HttpRequest(contents);
};
function sharedHeaders(operation) {
    return {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": `AWSEvents.${operation}`,
    };
}
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
const parseErrorBody = async (errorBody, context) => {
    const value = await parseBody(errorBody, context);
    value.message = value.message ?? value.Message;
    return value;
};
const loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (typeof cleanValue === "number") {
            cleanValue = cleanValue.toString();
        }
        if (cleanValue.indexOf(",") >= 0) {
            cleanValue = cleanValue.split(",")[0];
        }
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
};
