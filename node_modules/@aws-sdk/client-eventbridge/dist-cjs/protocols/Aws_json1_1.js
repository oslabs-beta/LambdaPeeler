"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.se_TagResourceCommand = exports.se_StartReplayCommand = exports.se_RemoveTargetsCommand = exports.se_RemovePermissionCommand = exports.se_PutTargetsCommand = exports.se_PutRuleCommand = exports.se_PutPermissionCommand = exports.se_PutPartnerEventsCommand = exports.se_PutEventsCommand = exports.se_ListTargetsByRuleCommand = exports.se_ListTagsForResourceCommand = exports.se_ListRulesCommand = exports.se_ListRuleNamesByTargetCommand = exports.se_ListReplaysCommand = exports.se_ListPartnerEventSourcesCommand = exports.se_ListPartnerEventSourceAccountsCommand = exports.se_ListEventSourcesCommand = exports.se_ListEventBusesCommand = exports.se_ListEndpointsCommand = exports.se_ListConnectionsCommand = exports.se_ListArchivesCommand = exports.se_ListApiDestinationsCommand = exports.se_EnableRuleCommand = exports.se_DisableRuleCommand = exports.se_DescribeRuleCommand = exports.se_DescribeReplayCommand = exports.se_DescribePartnerEventSourceCommand = exports.se_DescribeEventSourceCommand = exports.se_DescribeEventBusCommand = exports.se_DescribeEndpointCommand = exports.se_DescribeConnectionCommand = exports.se_DescribeArchiveCommand = exports.se_DescribeApiDestinationCommand = exports.se_DeleteRuleCommand = exports.se_DeletePartnerEventSourceCommand = exports.se_DeleteEventBusCommand = exports.se_DeleteEndpointCommand = exports.se_DeleteConnectionCommand = exports.se_DeleteArchiveCommand = exports.se_DeleteApiDestinationCommand = exports.se_DeauthorizeConnectionCommand = exports.se_DeactivateEventSourceCommand = exports.se_CreatePartnerEventSourceCommand = exports.se_CreateEventBusCommand = exports.se_CreateEndpointCommand = exports.se_CreateConnectionCommand = exports.se_CreateArchiveCommand = exports.se_CreateApiDestinationCommand = exports.se_CancelReplayCommand = exports.se_ActivateEventSourceCommand = void 0;
exports.de_PutPermissionCommand = exports.de_PutPartnerEventsCommand = exports.de_PutEventsCommand = exports.de_ListTargetsByRuleCommand = exports.de_ListTagsForResourceCommand = exports.de_ListRulesCommand = exports.de_ListRuleNamesByTargetCommand = exports.de_ListReplaysCommand = exports.de_ListPartnerEventSourcesCommand = exports.de_ListPartnerEventSourceAccountsCommand = exports.de_ListEventSourcesCommand = exports.de_ListEventBusesCommand = exports.de_ListEndpointsCommand = exports.de_ListConnectionsCommand = exports.de_ListArchivesCommand = exports.de_ListApiDestinationsCommand = exports.de_EnableRuleCommand = exports.de_DisableRuleCommand = exports.de_DescribeRuleCommand = exports.de_DescribeReplayCommand = exports.de_DescribePartnerEventSourceCommand = exports.de_DescribeEventSourceCommand = exports.de_DescribeEventBusCommand = exports.de_DescribeEndpointCommand = exports.de_DescribeConnectionCommand = exports.de_DescribeArchiveCommand = exports.de_DescribeApiDestinationCommand = exports.de_DeleteRuleCommand = exports.de_DeletePartnerEventSourceCommand = exports.de_DeleteEventBusCommand = exports.de_DeleteEndpointCommand = exports.de_DeleteConnectionCommand = exports.de_DeleteArchiveCommand = exports.de_DeleteApiDestinationCommand = exports.de_DeauthorizeConnectionCommand = exports.de_DeactivateEventSourceCommand = exports.de_CreatePartnerEventSourceCommand = exports.de_CreateEventBusCommand = exports.de_CreateEndpointCommand = exports.de_CreateConnectionCommand = exports.de_CreateArchiveCommand = exports.de_CreateApiDestinationCommand = exports.de_CancelReplayCommand = exports.de_ActivateEventSourceCommand = exports.se_UpdateEndpointCommand = exports.se_UpdateConnectionCommand = exports.se_UpdateArchiveCommand = exports.se_UpdateApiDestinationCommand = exports.se_UntagResourceCommand = exports.se_TestEventPatternCommand = void 0;
exports.de_UpdateEndpointCommand = exports.de_UpdateConnectionCommand = exports.de_UpdateArchiveCommand = exports.de_UpdateApiDestinationCommand = exports.de_UntagResourceCommand = exports.de_TestEventPatternCommand = exports.de_TagResourceCommand = exports.de_StartReplayCommand = exports.de_RemoveTargetsCommand = exports.de_RemovePermissionCommand = exports.de_PutTargetsCommand = exports.de_PutRuleCommand = void 0;
const protocol_http_1 = require("@smithy/protocol-http");
const smithy_client_1 = require("@smithy/smithy-client");
const EventBridgeServiceException_1 = require("../models/EventBridgeServiceException");
const models_0_1 = require("../models/models_0");
const se_ActivateEventSourceCommand = async (input, context) => {
    const headers = sharedHeaders("ActivateEventSource");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ActivateEventSourceCommand = se_ActivateEventSourceCommand;
const se_CancelReplayCommand = async (input, context) => {
    const headers = sharedHeaders("CancelReplay");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_CancelReplayCommand = se_CancelReplayCommand;
const se_CreateApiDestinationCommand = async (input, context) => {
    const headers = sharedHeaders("CreateApiDestination");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_CreateApiDestinationCommand = se_CreateApiDestinationCommand;
const se_CreateArchiveCommand = async (input, context) => {
    const headers = sharedHeaders("CreateArchive");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_CreateArchiveCommand = se_CreateArchiveCommand;
const se_CreateConnectionCommand = async (input, context) => {
    const headers = sharedHeaders("CreateConnection");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_CreateConnectionCommand = se_CreateConnectionCommand;
const se_CreateEndpointCommand = async (input, context) => {
    const headers = sharedHeaders("CreateEndpoint");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_CreateEndpointCommand = se_CreateEndpointCommand;
const se_CreateEventBusCommand = async (input, context) => {
    const headers = sharedHeaders("CreateEventBus");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_CreateEventBusCommand = se_CreateEventBusCommand;
const se_CreatePartnerEventSourceCommand = async (input, context) => {
    const headers = sharedHeaders("CreatePartnerEventSource");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_CreatePartnerEventSourceCommand = se_CreatePartnerEventSourceCommand;
const se_DeactivateEventSourceCommand = async (input, context) => {
    const headers = sharedHeaders("DeactivateEventSource");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeactivateEventSourceCommand = se_DeactivateEventSourceCommand;
const se_DeauthorizeConnectionCommand = async (input, context) => {
    const headers = sharedHeaders("DeauthorizeConnection");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeauthorizeConnectionCommand = se_DeauthorizeConnectionCommand;
const se_DeleteApiDestinationCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteApiDestination");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeleteApiDestinationCommand = se_DeleteApiDestinationCommand;
const se_DeleteArchiveCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteArchive");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeleteArchiveCommand = se_DeleteArchiveCommand;
const se_DeleteConnectionCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteConnection");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeleteConnectionCommand = se_DeleteConnectionCommand;
const se_DeleteEndpointCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteEndpoint");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeleteEndpointCommand = se_DeleteEndpointCommand;
const se_DeleteEventBusCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteEventBus");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeleteEventBusCommand = se_DeleteEventBusCommand;
const se_DeletePartnerEventSourceCommand = async (input, context) => {
    const headers = sharedHeaders("DeletePartnerEventSource");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeletePartnerEventSourceCommand = se_DeletePartnerEventSourceCommand;
const se_DeleteRuleCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteRule");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeleteRuleCommand = se_DeleteRuleCommand;
const se_DescribeApiDestinationCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeApiDestination");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeApiDestinationCommand = se_DescribeApiDestinationCommand;
const se_DescribeArchiveCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeArchive");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeArchiveCommand = se_DescribeArchiveCommand;
const se_DescribeConnectionCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeConnection");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeConnectionCommand = se_DescribeConnectionCommand;
const se_DescribeEndpointCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeEndpoint");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeEndpointCommand = se_DescribeEndpointCommand;
const se_DescribeEventBusCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeEventBus");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeEventBusCommand = se_DescribeEventBusCommand;
const se_DescribeEventSourceCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeEventSource");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeEventSourceCommand = se_DescribeEventSourceCommand;
const se_DescribePartnerEventSourceCommand = async (input, context) => {
    const headers = sharedHeaders("DescribePartnerEventSource");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribePartnerEventSourceCommand = se_DescribePartnerEventSourceCommand;
const se_DescribeReplayCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeReplay");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeReplayCommand = se_DescribeReplayCommand;
const se_DescribeRuleCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeRule");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeRuleCommand = se_DescribeRuleCommand;
const se_DisableRuleCommand = async (input, context) => {
    const headers = sharedHeaders("DisableRule");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DisableRuleCommand = se_DisableRuleCommand;
const se_EnableRuleCommand = async (input, context) => {
    const headers = sharedHeaders("EnableRule");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_EnableRuleCommand = se_EnableRuleCommand;
const se_ListApiDestinationsCommand = async (input, context) => {
    const headers = sharedHeaders("ListApiDestinations");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListApiDestinationsCommand = se_ListApiDestinationsCommand;
const se_ListArchivesCommand = async (input, context) => {
    const headers = sharedHeaders("ListArchives");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListArchivesCommand = se_ListArchivesCommand;
const se_ListConnectionsCommand = async (input, context) => {
    const headers = sharedHeaders("ListConnections");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListConnectionsCommand = se_ListConnectionsCommand;
const se_ListEndpointsCommand = async (input, context) => {
    const headers = sharedHeaders("ListEndpoints");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListEndpointsCommand = se_ListEndpointsCommand;
const se_ListEventBusesCommand = async (input, context) => {
    const headers = sharedHeaders("ListEventBuses");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListEventBusesCommand = se_ListEventBusesCommand;
const se_ListEventSourcesCommand = async (input, context) => {
    const headers = sharedHeaders("ListEventSources");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListEventSourcesCommand = se_ListEventSourcesCommand;
const se_ListPartnerEventSourceAccountsCommand = async (input, context) => {
    const headers = sharedHeaders("ListPartnerEventSourceAccounts");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListPartnerEventSourceAccountsCommand = se_ListPartnerEventSourceAccountsCommand;
const se_ListPartnerEventSourcesCommand = async (input, context) => {
    const headers = sharedHeaders("ListPartnerEventSources");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListPartnerEventSourcesCommand = se_ListPartnerEventSourcesCommand;
const se_ListReplaysCommand = async (input, context) => {
    const headers = sharedHeaders("ListReplays");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListReplaysCommand = se_ListReplaysCommand;
const se_ListRuleNamesByTargetCommand = async (input, context) => {
    const headers = sharedHeaders("ListRuleNamesByTarget");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListRuleNamesByTargetCommand = se_ListRuleNamesByTargetCommand;
const se_ListRulesCommand = async (input, context) => {
    const headers = sharedHeaders("ListRules");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListRulesCommand = se_ListRulesCommand;
const se_ListTagsForResourceCommand = async (input, context) => {
    const headers = sharedHeaders("ListTagsForResource");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListTagsForResourceCommand = se_ListTagsForResourceCommand;
const se_ListTargetsByRuleCommand = async (input, context) => {
    const headers = sharedHeaders("ListTargetsByRule");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListTargetsByRuleCommand = se_ListTargetsByRuleCommand;
const se_PutEventsCommand = async (input, context) => {
    const headers = sharedHeaders("PutEvents");
    let body;
    body = JSON.stringify(se_PutEventsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_PutEventsCommand = se_PutEventsCommand;
const se_PutPartnerEventsCommand = async (input, context) => {
    const headers = sharedHeaders("PutPartnerEvents");
    let body;
    body = JSON.stringify(se_PutPartnerEventsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_PutPartnerEventsCommand = se_PutPartnerEventsCommand;
const se_PutPermissionCommand = async (input, context) => {
    const headers = sharedHeaders("PutPermission");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_PutPermissionCommand = se_PutPermissionCommand;
const se_PutRuleCommand = async (input, context) => {
    const headers = sharedHeaders("PutRule");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_PutRuleCommand = se_PutRuleCommand;
const se_PutTargetsCommand = async (input, context) => {
    const headers = sharedHeaders("PutTargets");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_PutTargetsCommand = se_PutTargetsCommand;
const se_RemovePermissionCommand = async (input, context) => {
    const headers = sharedHeaders("RemovePermission");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_RemovePermissionCommand = se_RemovePermissionCommand;
const se_RemoveTargetsCommand = async (input, context) => {
    const headers = sharedHeaders("RemoveTargets");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_RemoveTargetsCommand = se_RemoveTargetsCommand;
const se_StartReplayCommand = async (input, context) => {
    const headers = sharedHeaders("StartReplay");
    let body;
    body = JSON.stringify(se_StartReplayRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_StartReplayCommand = se_StartReplayCommand;
const se_TagResourceCommand = async (input, context) => {
    const headers = sharedHeaders("TagResource");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_TagResourceCommand = se_TagResourceCommand;
const se_TestEventPatternCommand = async (input, context) => {
    const headers = sharedHeaders("TestEventPattern");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_TestEventPatternCommand = se_TestEventPatternCommand;
const se_UntagResourceCommand = async (input, context) => {
    const headers = sharedHeaders("UntagResource");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_UntagResourceCommand = se_UntagResourceCommand;
const se_UpdateApiDestinationCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateApiDestination");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_UpdateApiDestinationCommand = se_UpdateApiDestinationCommand;
const se_UpdateArchiveCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateArchive");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_UpdateArchiveCommand = se_UpdateArchiveCommand;
const se_UpdateConnectionCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateConnection");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_UpdateConnectionCommand = se_UpdateConnectionCommand;
const se_UpdateEndpointCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateEndpoint");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_UpdateEndpointCommand = se_UpdateEndpointCommand;
const de_ActivateEventSourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ActivateEventSourceCommandError(output, context);
    }
    await (0, smithy_client_1.collectBody)(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
exports.de_ActivateEventSourceCommand = de_ActivateEventSourceCommand;
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
const de_CancelReplayCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CancelReplayCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_CancelReplayCommand = de_CancelReplayCommand;
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
const de_CreateApiDestinationCommand = async (output, context) => {
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
exports.de_CreateApiDestinationCommand = de_CreateApiDestinationCommand;
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
const de_CreateArchiveCommand = async (output, context) => {
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
exports.de_CreateArchiveCommand = de_CreateArchiveCommand;
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
const de_CreateConnectionCommand = async (output, context) => {
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
exports.de_CreateConnectionCommand = de_CreateConnectionCommand;
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
const de_CreateEndpointCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CreateEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_CreateEndpointCommand = de_CreateEndpointCommand;
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
const de_CreateEventBusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CreateEventBusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_CreateEventBusCommand = de_CreateEventBusCommand;
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
const de_CreatePartnerEventSourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CreatePartnerEventSourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_CreatePartnerEventSourceCommand = de_CreatePartnerEventSourceCommand;
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
const de_DeactivateEventSourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeactivateEventSourceCommandError(output, context);
    }
    await (0, smithy_client_1.collectBody)(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
exports.de_DeactivateEventSourceCommand = de_DeactivateEventSourceCommand;
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
const de_DeauthorizeConnectionCommand = async (output, context) => {
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
exports.de_DeauthorizeConnectionCommand = de_DeauthorizeConnectionCommand;
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
const de_DeleteApiDestinationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteApiDestinationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DeleteApiDestinationCommand = de_DeleteApiDestinationCommand;
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
const de_DeleteArchiveCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteArchiveCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DeleteArchiveCommand = de_DeleteArchiveCommand;
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
const de_DeleteConnectionCommand = async (output, context) => {
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
exports.de_DeleteConnectionCommand = de_DeleteConnectionCommand;
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
const de_DeleteEndpointCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DeleteEndpointCommand = de_DeleteEndpointCommand;
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
const de_DeleteEventBusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteEventBusCommandError(output, context);
    }
    await (0, smithy_client_1.collectBody)(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
exports.de_DeleteEventBusCommand = de_DeleteEventBusCommand;
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
const de_DeletePartnerEventSourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeletePartnerEventSourceCommandError(output, context);
    }
    await (0, smithy_client_1.collectBody)(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
exports.de_DeletePartnerEventSourceCommand = de_DeletePartnerEventSourceCommand;
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
const de_DeleteRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteRuleCommandError(output, context);
    }
    await (0, smithy_client_1.collectBody)(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
exports.de_DeleteRuleCommand = de_DeleteRuleCommand;
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
const de_DescribeApiDestinationCommand = async (output, context) => {
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
exports.de_DescribeApiDestinationCommand = de_DescribeApiDestinationCommand;
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
const de_DescribeArchiveCommand = async (output, context) => {
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
exports.de_DescribeArchiveCommand = de_DescribeArchiveCommand;
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
const de_DescribeConnectionCommand = async (output, context) => {
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
exports.de_DescribeConnectionCommand = de_DescribeConnectionCommand;
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
const de_DescribeEndpointCommand = async (output, context) => {
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
exports.de_DescribeEndpointCommand = de_DescribeEndpointCommand;
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
const de_DescribeEventBusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeEventBusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeEventBusCommand = de_DescribeEventBusCommand;
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
const de_DescribeEventSourceCommand = async (output, context) => {
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
exports.de_DescribeEventSourceCommand = de_DescribeEventSourceCommand;
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
const de_DescribePartnerEventSourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribePartnerEventSourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribePartnerEventSourceCommand = de_DescribePartnerEventSourceCommand;
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
const de_DescribeReplayCommand = async (output, context) => {
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
exports.de_DescribeReplayCommand = de_DescribeReplayCommand;
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
const de_DescribeRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeRuleCommand = de_DescribeRuleCommand;
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
const de_DisableRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DisableRuleCommandError(output, context);
    }
    await (0, smithy_client_1.collectBody)(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
exports.de_DisableRuleCommand = de_DisableRuleCommand;
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
const de_EnableRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_EnableRuleCommandError(output, context);
    }
    await (0, smithy_client_1.collectBody)(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
exports.de_EnableRuleCommand = de_EnableRuleCommand;
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
const de_ListApiDestinationsCommand = async (output, context) => {
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
exports.de_ListApiDestinationsCommand = de_ListApiDestinationsCommand;
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
const de_ListArchivesCommand = async (output, context) => {
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
exports.de_ListArchivesCommand = de_ListArchivesCommand;
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
const de_ListConnectionsCommand = async (output, context) => {
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
exports.de_ListConnectionsCommand = de_ListConnectionsCommand;
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
const de_ListEndpointsCommand = async (output, context) => {
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
exports.de_ListEndpointsCommand = de_ListEndpointsCommand;
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
const de_ListEventBusesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListEventBusesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListEventBusesCommand = de_ListEventBusesCommand;
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
const de_ListEventSourcesCommand = async (output, context) => {
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
exports.de_ListEventSourcesCommand = de_ListEventSourcesCommand;
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
const de_ListPartnerEventSourceAccountsCommand = async (output, context) => {
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
exports.de_ListPartnerEventSourceAccountsCommand = de_ListPartnerEventSourceAccountsCommand;
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
const de_ListPartnerEventSourcesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListPartnerEventSourcesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListPartnerEventSourcesCommand = de_ListPartnerEventSourcesCommand;
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
const de_ListReplaysCommand = async (output, context) => {
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
exports.de_ListReplaysCommand = de_ListReplaysCommand;
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
const de_ListRuleNamesByTargetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListRuleNamesByTargetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListRuleNamesByTargetCommand = de_ListRuleNamesByTargetCommand;
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
const de_ListRulesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListRulesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListRulesCommand = de_ListRulesCommand;
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
const de_ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListTagsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListTagsForResourceCommand = de_ListTagsForResourceCommand;
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
const de_ListTargetsByRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListTargetsByRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListTargetsByRuleCommand = de_ListTargetsByRuleCommand;
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
const de_PutEventsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_PutEventsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_PutEventsCommand = de_PutEventsCommand;
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
const de_PutPartnerEventsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_PutPartnerEventsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_PutPartnerEventsCommand = de_PutPartnerEventsCommand;
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
const de_PutPermissionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_PutPermissionCommandError(output, context);
    }
    await (0, smithy_client_1.collectBody)(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
exports.de_PutPermissionCommand = de_PutPermissionCommand;
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
const de_PutRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_PutRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_PutRuleCommand = de_PutRuleCommand;
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
const de_PutTargetsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_PutTargetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_PutTargetsCommand = de_PutTargetsCommand;
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
const de_RemovePermissionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_RemovePermissionCommandError(output, context);
    }
    await (0, smithy_client_1.collectBody)(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
exports.de_RemovePermissionCommand = de_RemovePermissionCommand;
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
const de_RemoveTargetsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_RemoveTargetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_RemoveTargetsCommand = de_RemoveTargetsCommand;
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
const de_StartReplayCommand = async (output, context) => {
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
exports.de_StartReplayCommand = de_StartReplayCommand;
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
const de_TagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_TagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_TagResourceCommand = de_TagResourceCommand;
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
const de_TestEventPatternCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_TestEventPatternCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_TestEventPatternCommand = de_TestEventPatternCommand;
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
const de_UntagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UntagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_UntagResourceCommand = de_UntagResourceCommand;
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
const de_UpdateApiDestinationCommand = async (output, context) => {
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
exports.de_UpdateApiDestinationCommand = de_UpdateApiDestinationCommand;
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
const de_UpdateArchiveCommand = async (output, context) => {
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
exports.de_UpdateArchiveCommand = de_UpdateArchiveCommand;
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
const de_UpdateConnectionCommand = async (output, context) => {
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
exports.de_UpdateConnectionCommand = de_UpdateConnectionCommand;
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
const de_UpdateEndpointCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_UpdateEndpointCommand = de_UpdateEndpointCommand;
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
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.ConcurrentModificationException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_IllegalStatusExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.IllegalStatusException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InternalExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InternalException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidEventPatternExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InvalidEventPatternException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidStateExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InvalidStateException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_LimitExceededExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.LimitExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ManagedRuleExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.ManagedRuleException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_OperationDisabledExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.OperationDisabledException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_PolicyLengthExceededExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.PolicyLengthExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ResourceAlreadyExistsExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.ResourceAlreadyExistsException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ResourceNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.ResourceNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const se_PutEventsRequest = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        EndpointId: [],
        Entries: (_) => se_PutEventsRequestEntryList(_, context),
    });
};
const se_PutEventsRequestEntry = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        Detail: [],
        DetailType: [],
        EventBusName: [],
        Resources: smithy_client_1._json,
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
    return (0, smithy_client_1.take)(input, {
        Entries: (_) => se_PutPartnerEventsRequestEntryList(_, context),
    });
};
const se_PutPartnerEventsRequestEntry = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        Detail: [],
        DetailType: [],
        Resources: smithy_client_1._json,
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
    return (0, smithy_client_1.take)(input, {
        Description: [],
        Destination: smithy_client_1._json,
        EventEndTime: (_) => Math.round(_.getTime() / 1000),
        EventSourceArn: [],
        EventStartTime: (_) => Math.round(_.getTime() / 1000),
        ReplayName: [],
    });
};
const de_ApiDestination = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        ApiDestinationArn: smithy_client_1.expectString,
        ApiDestinationState: smithy_client_1.expectString,
        ConnectionArn: smithy_client_1.expectString,
        CreationTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        HttpMethod: smithy_client_1.expectString,
        InvocationEndpoint: smithy_client_1.expectString,
        InvocationRateLimitPerSecond: smithy_client_1.expectInt32,
        LastModifiedTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Name: smithy_client_1.expectString,
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
    return (0, smithy_client_1.take)(output, {
        ArchiveName: smithy_client_1.expectString,
        CreationTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        EventCount: smithy_client_1.expectLong,
        EventSourceArn: smithy_client_1.expectString,
        RetentionDays: smithy_client_1.expectInt32,
        SizeBytes: smithy_client_1.expectLong,
        State: smithy_client_1.expectString,
        StateReason: smithy_client_1.expectString,
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
    return (0, smithy_client_1.take)(output, {
        AuthorizationType: smithy_client_1.expectString,
        ConnectionArn: smithy_client_1.expectString,
        ConnectionState: smithy_client_1.expectString,
        CreationTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        LastAuthorizedTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        LastModifiedTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Name: smithy_client_1.expectString,
        StateReason: smithy_client_1.expectString,
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
    return (0, smithy_client_1.take)(output, {
        ApiDestinationArn: smithy_client_1.expectString,
        ApiDestinationState: smithy_client_1.expectString,
        CreationTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        LastModifiedTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
    });
};
const de_CreateArchiveResponse = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        ArchiveArn: smithy_client_1.expectString,
        CreationTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        State: smithy_client_1.expectString,
        StateReason: smithy_client_1.expectString,
    });
};
const de_CreateConnectionResponse = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        ConnectionArn: smithy_client_1.expectString,
        ConnectionState: smithy_client_1.expectString,
        CreationTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        LastModifiedTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
    });
};
const de_DeauthorizeConnectionResponse = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        ConnectionArn: smithy_client_1.expectString,
        ConnectionState: smithy_client_1.expectString,
        CreationTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        LastAuthorizedTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        LastModifiedTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
    });
};
const de_DeleteConnectionResponse = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        ConnectionArn: smithy_client_1.expectString,
        ConnectionState: smithy_client_1.expectString,
        CreationTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        LastAuthorizedTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        LastModifiedTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
    });
};
const de_DescribeApiDestinationResponse = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        ApiDestinationArn: smithy_client_1.expectString,
        ApiDestinationState: smithy_client_1.expectString,
        ConnectionArn: smithy_client_1.expectString,
        CreationTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Description: smithy_client_1.expectString,
        HttpMethod: smithy_client_1.expectString,
        InvocationEndpoint: smithy_client_1.expectString,
        InvocationRateLimitPerSecond: smithy_client_1.expectInt32,
        LastModifiedTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Name: smithy_client_1.expectString,
    });
};
const de_DescribeArchiveResponse = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        ArchiveArn: smithy_client_1.expectString,
        ArchiveName: smithy_client_1.expectString,
        CreationTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Description: smithy_client_1.expectString,
        EventCount: smithy_client_1.expectLong,
        EventPattern: smithy_client_1.expectString,
        EventSourceArn: smithy_client_1.expectString,
        RetentionDays: smithy_client_1.expectInt32,
        SizeBytes: smithy_client_1.expectLong,
        State: smithy_client_1.expectString,
        StateReason: smithy_client_1.expectString,
    });
};
const de_DescribeConnectionResponse = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        AuthParameters: smithy_client_1._json,
        AuthorizationType: smithy_client_1.expectString,
        ConnectionArn: smithy_client_1.expectString,
        ConnectionState: smithy_client_1.expectString,
        CreationTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Description: smithy_client_1.expectString,
        LastAuthorizedTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        LastModifiedTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Name: smithy_client_1.expectString,
        SecretArn: smithy_client_1.expectString,
        StateReason: smithy_client_1.expectString,
    });
};
const de_DescribeEndpointResponse = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        Arn: smithy_client_1.expectString,
        CreationTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Description: smithy_client_1.expectString,
        EndpointId: smithy_client_1.expectString,
        EndpointUrl: smithy_client_1.expectString,
        EventBuses: smithy_client_1._json,
        LastModifiedTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Name: smithy_client_1.expectString,
        ReplicationConfig: smithy_client_1._json,
        RoleArn: smithy_client_1.expectString,
        RoutingConfig: smithy_client_1._json,
        State: smithy_client_1.expectString,
        StateReason: smithy_client_1.expectString,
    });
};
const de_DescribeEventSourceResponse = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        Arn: smithy_client_1.expectString,
        CreatedBy: smithy_client_1.expectString,
        CreationTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        ExpirationTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Name: smithy_client_1.expectString,
        State: smithy_client_1.expectString,
    });
};
const de_DescribeReplayResponse = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        Description: smithy_client_1.expectString,
        Destination: smithy_client_1._json,
        EventEndTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        EventLastReplayedTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        EventSourceArn: smithy_client_1.expectString,
        EventStartTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        ReplayArn: smithy_client_1.expectString,
        ReplayEndTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        ReplayName: smithy_client_1.expectString,
        ReplayStartTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        State: smithy_client_1.expectString,
        StateReason: smithy_client_1.expectString,
    });
};
const de_Endpoint = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        Arn: smithy_client_1.expectString,
        CreationTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Description: smithy_client_1.expectString,
        EndpointId: smithy_client_1.expectString,
        EndpointUrl: smithy_client_1.expectString,
        EventBuses: smithy_client_1._json,
        LastModifiedTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Name: smithy_client_1.expectString,
        ReplicationConfig: smithy_client_1._json,
        RoleArn: smithy_client_1.expectString,
        RoutingConfig: smithy_client_1._json,
        State: smithy_client_1.expectString,
        StateReason: smithy_client_1.expectString,
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
    return (0, smithy_client_1.take)(output, {
        Arn: smithy_client_1.expectString,
        CreatedBy: smithy_client_1.expectString,
        CreationTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        ExpirationTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Name: smithy_client_1.expectString,
        State: smithy_client_1.expectString,
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
    return (0, smithy_client_1.take)(output, {
        ApiDestinations: (_) => de_ApiDestinationResponseList(_, context),
        NextToken: smithy_client_1.expectString,
    });
};
const de_ListArchivesResponse = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        Archives: (_) => de_ArchiveResponseList(_, context),
        NextToken: smithy_client_1.expectString,
    });
};
const de_ListConnectionsResponse = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        Connections: (_) => de_ConnectionResponseList(_, context),
        NextToken: smithy_client_1.expectString,
    });
};
const de_ListEndpointsResponse = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        Endpoints: (_) => de_EndpointList(_, context),
        NextToken: smithy_client_1.expectString,
    });
};
const de_ListEventSourcesResponse = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        EventSources: (_) => de_EventSourceList(_, context),
        NextToken: smithy_client_1.expectString,
    });
};
const de_ListPartnerEventSourceAccountsResponse = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        NextToken: smithy_client_1.expectString,
        PartnerEventSourceAccounts: (_) => de_PartnerEventSourceAccountList(_, context),
    });
};
const de_ListReplaysResponse = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        NextToken: smithy_client_1.expectString,
        Replays: (_) => de_ReplayList(_, context),
    });
};
const de_PartnerEventSourceAccount = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        Account: smithy_client_1.expectString,
        CreationTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        ExpirationTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        State: smithy_client_1.expectString,
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
    return (0, smithy_client_1.take)(output, {
        EventEndTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        EventLastReplayedTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        EventSourceArn: smithy_client_1.expectString,
        EventStartTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        ReplayEndTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        ReplayName: smithy_client_1.expectString,
        ReplayStartTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        State: smithy_client_1.expectString,
        StateReason: smithy_client_1.expectString,
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
    return (0, smithy_client_1.take)(output, {
        ReplayArn: smithy_client_1.expectString,
        ReplayStartTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        State: smithy_client_1.expectString,
        StateReason: smithy_client_1.expectString,
    });
};
const de_UpdateApiDestinationResponse = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        ApiDestinationArn: smithy_client_1.expectString,
        ApiDestinationState: smithy_client_1.expectString,
        CreationTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        LastModifiedTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
    });
};
const de_UpdateArchiveResponse = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        ArchiveArn: smithy_client_1.expectString,
        CreationTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        State: smithy_client_1.expectString,
        StateReason: smithy_client_1.expectString,
    });
};
const de_UpdateConnectionResponse = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        ConnectionArn: smithy_client_1.expectString,
        ConnectionState: smithy_client_1.expectString,
        CreationTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        LastAuthorizedTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        LastModifiedTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
    });
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const collectBodyString = (streamBody, context) => (0, smithy_client_1.collectBody)(streamBody, context).then((body) => context.utf8Encoder(body));
const throwDefaultError = (0, smithy_client_1.withBaseException)(EventBridgeServiceException_1.EventBridgeServiceException);
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
    return new protocol_http_1.HttpRequest(contents);
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
